<template>
    <div class="head_all">
        <n-dropdown :options="options" @select="handleSelect">
            <n-avatar round size="small" :src="avatarImg"
                fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </n-dropdown>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ImgUtil } from '../utils/imgUtils';
import router from '../router';

// import { h } from 'vue'
// import type { Component } from 'vue'
// import { NIcon } from 'naive-ui'
// import {
//     PersonCircleOutline as UserIcon,
//     Pencil as EditIcon,
//     LogOutOutline as LogoutIcon
// } from '@vicons/ionicons5'

/**
 * 渲染图标
 * @param icon 
 */
// const renderIcon = (icon: Component) => {
//     return () => {
//         return h(NIcon, null, {
//             default: () => h(icon)
//         })
//     }
// }

const options = [{
        label: '😊 主页',
        key:'home'
        // key: 'profile',
        // icon: ''
    },
    {
        label: '📮 联系我们',
        key:'contact'
        // key: 'profile',
        // icon: ''
    },
    // {
    //     label: '✍️ 创建简历投递',
    //     key: 'resume',
    //     // icon: ''
    // },
    {
        label: '🔙 退出登录入口',
        key: 'login',
        // icon: ''
    }
]


const handleSelect = (key: string) => {
    if(key != 'login'){
        toPath(key)
    }else{
        window.$message.success('暂未开放...')
    }  
}

const avatarImg = ref(ImgUtil.getImg('xiaoxin.jpg'))

const toPath = (url: string) => {
    router.push({ name: url })
}

</script>

<style scoped>
.head_all {
    margin: 35px 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    z-index: 2;
}


.n-dropdown:hover,
.n-avatar:hover {
    filter: drop-shadow(0 0 1.5em #42b883aa);
}
</style>