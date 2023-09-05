<template>
  <div class="contact-all">
    <div class="contact-card">
       
      <n-card>
        <n-tabs type="line" size="large" :tabs-padding="20">
          <n-tab-pane name="纳新微信群">
            <img class="contact-img" alt="科协2023届预热微信群" :src="wechatImg" />
          </n-tab-pane>

          <n-tab-pane name="联系我们">
            <n-form-item label="你的邮箱">
              <n-auto-complete v-model:value="model.userEmail" :options="autoCompleteOptions" placeholder="邮箱" />
            </n-form-item>
            <n-form-item label="留言">
              <n-input v-model:value="model.content" placeholder="想说的话" />
            </n-form-item>
            <n-button strong secondary type="success" @click="submit">
              {{ status }}
            </n-button>
          </n-tab-pane>

          <n-tab-pane name="点赞">
            <n-form-item label="点赞数">
              {{ like }}
            </n-form-item>
            <n-button type="primary" ghost @click="tolike">
              点一个赞👍
            </n-button>
          </n-tab-pane>


        </n-tabs>
      </n-card>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { ImgUtil } from "../../utils/imgUtils"
import tcbapp from "../../utils/tcbInit";
import throttle from "../../utils/throttle";
const wechatImg = ImgUtil.getImg('wechat.jpg')
const model = ref({
  content: "",
  email: "",
  userEmail: ""
})

const autoCompleteOptions = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = model.value.userEmail.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})

// 加载状态
const status = ref("一键发送")

//发送邮件
const submit = throttle(() => {

  if (model.value.content.trim() === "") {
    window.$message.warning("留言不能为空")
    return
  }

  status.value = "正在发送..."

  tcbapp
    .callFunction({
      // 云函数名称
      name: "sendEmail",
      // 传给云函数的参数
      data: {
        email: model.value.email,
        userEmail: model.value.userEmail,
        content: model.value.content
      }
    })
    .then((res) => {
      status.value = "一键发送"
      window.$message.success("发送成功")
      showConfetti()
      console.log(res);
    })
    .catch(() => {
      status.value = "一键发送"
      console.error
      window.$message.error("发送失败")
    });

}, 1000, { leading: true, trailing: false })

import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

const showConfetti = () => {
  confetti.addConfetti({
    confettiRadius: 6,
    confettiNumber: 400,
  })
}

const like = ref()
const getlikenum = () => {
  tcbapp
    .callFunction({
      // 云函数名称
      name: "likeNum",
      data: {}
    })
    .then((res) => {
      like.value = res.result.likenum
    })
    .catch(() => {
      console.error
      window.$message.error("加载失败")
    });
}
onMounted(() => {
  getlikenum()
})

//点赞
const tolike = throttle(() => {

  tcbapp
    .callFunction({
      // 云函数名称
      name: "onlike",
      data: {}
    })
    .then(() => {
      window.$message.success("点赞成功")
      showConfetti()
      getlikenum()
    })
    .catch(() => {
      console.error
      window.$message.error("失败")
    });

}, 1000, { leading: true, trailing: false })


</script>

<style scoped>
.contact-all {
  background-color: black;
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
}

.contact-card {
  margin: 100px auto;
}

.contact-img {
  width: 80%;
  height: 100%;
  max-width: 400px;
}
</style>