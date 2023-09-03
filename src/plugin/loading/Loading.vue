<template>
    <div v-if="loading" class="loading">
        <Lottie class="load-animation" :animation-data="loadAnimation"></Lottie>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Lottie from '../../components/lottie/index.vue'
import loadAnimation from '../../assets/json/Tz6wrdUS4z.json'

const loading = ref(false)

const show = () => {
    loading.value = true
    console.log('show方法执行')

    document.body.style.overflow = "hidden";// 禁止页面滑动
    // document.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false }); 
}

const hide = () => {
    loading.value = false
    console.log('hide方法执行')

    document.body.style.overflow = ""; // 允许滚动
    // document.removeEventListener("touchmove", (e) => e.preventDefault(), false);
}

defineExpose({
    show,
    hide
})

</script>

<style scoped>
.loading {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--base-color);
    z-index: 999;
    overflow: hidden;
}
.load-animation{
    width:40vw;
}
</style>

