import { defineStore } from "pinia";
import UserApi from "../../api/UserApi";
import { LoginData, RegisterData } from "./state";
import router from "../../router";

export const userStore = defineStore('userStore', {
    state: () => {
        return {
            userInfo: []
        }
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo
        }

    },
    actions: {
        async findUserInfo() {
            // const result = await UserApi.getUsersInfo()
            // this.userInfo = result.data
        },
        async Login(data: LoginData) {
            const result = await UserApi.postLogin(data)
            this.userInfo = result?.data
            window.sessionStorage.mid = result?.data.member.memberId;
            if (result?.data) {
                window.$message.success('登录成功！')
                router.push({ name: 'ctgy' })
            }

        },
        async Register(data: RegisterData) {
            const result = await UserApi.postRegister(data)
            if (result?.data) {
                window.$message.success('注册成功！')
                router.push({ name: 'login' })
            }

        }
    }
})
