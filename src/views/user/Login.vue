<template>
  <n-card title="" class="card">
    <n-tabs default-value="signin" size="large" justify-content="space-evenly">
      <n-tab-pane name="signin" tab="登录">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input type="text" v-model:value="username" />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input type="password" show-password-on="mousedown" v-model:value="password" />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block strong @click="login">
          登录
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="注册">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input type="text" v-model:value="username" />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input type="password" show-password-on="mousedown" v-model:value="password" />
          </n-form-item-row>
          <n-form-item-row label="昵称">
            <n-input type="text" v-model:value="nickname" />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block strong @click="register">
          注册
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { userStore } from "../../store/user"

const username = ref('')
const password = ref('')
const vc = ref('')
const nickname = ref('')
const store = userStore()

const login = () => {
  if (username.value && password.value && vc.value) {
    store.Login({username:username.value,password:password.value,vc:vc.value})
    vc.value = ''
  } else {
    window.$message.warning('值不能为空')
  }
}

const register = () => {
  if (username.value && password.value) {
    store.Register({username:username.value,password:password.value,nickname:nickname.value,vc:vc.value})
    vc.value = ''
  } else {
    window.$message.warning('值不能为空')
  }
}


</script>

<style scoped>
.card{
  width:350px;
  margin:0 auto;
  position: relative;
  top: 20vh;
} 

</style>


