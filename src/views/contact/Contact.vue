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
              {{status}}
            </n-button>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { ImgUtil } from "../../utils/imgUtils"
import tcbapp from "../../utils/tcbInit";
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
const submit = () => {

  if(model.value.content.trim() === ""){
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
        email:model.value.email,
        userEmail:model.value.userEmail,
        content:model.value.content
      }
    })
    .then((res) => {
      status.value = "一键发送"
      window.$message.success("发送成功")
      console.log(res);
    })
    .catch(()=>{
      status.value = "一键发送"
      console.error
      window.$message.error("发送失败")
    });

}


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