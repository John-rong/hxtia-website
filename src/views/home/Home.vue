<template>
    <div class="video-box">
        <Lottie class="animation-down" :animation-data="downAnimation"></Lottie>
        <LogoCanvas></LogoCanvas>
        <!-- <video ref="videoEl" id="videId" preload="auto" src="../../assets/nlogo.mp4" class="video" muted></video>  -->
    </div>
    <div class="introduce">
        <div class="introduce-word">
            <h1 :class="sY > 2100 ? 'fade-in-bottom' : 'nothing'">Hi,</h1>
            <h1 :class="sY > 2200 ? 'fade-in-bottom' : 'nothing'">小伙伴 🎉</h1>
            <h3 :class="sY > 2300 ? 'fade-in-bottom' : 'nothing'">这里是</h3>
            <h1 :class="sY > 2400 ? 'fade-in-bottom' : 'nothing'"><span>华信</span>科<span>技创新</span>协<span>会</span></h1>
            <h3 :class="sY > 2400 ? 'fade-in-bottom' : 'nothing'">HUA XIN TECHNOLOGY INNOVATION ASSOCIATION</h3>
        </div>
        <div class="introduce-story">
            <h2>相传，在华信有一个神秘组织，</h2>
            <h2>他们身居暗处，却能左右学院现象级活动的方向，</h2>
            <h2>他们相貌平凡，却能迸发出令人瞠目的光芒...</h2>

            <div class="introduce-story2">
                <h3>咳咳，编不下去了</h3>
                <h3>...</h3>
                <h3>...</h3>
                <h3>那下面就来看看科协都做过什么吧</h3>
                <Lottie v-if="isLoaded" class="animation-earth" :animation-data="earthAnimation"></Lottie>
            </div>
        </div>
        <HorizontalScroll v-if="isLoaded" :isAffix="isAffix"></HorizontalScroll>
        <h3>部门介绍</h3>
        <ShowDepartment v-if="isLoaded" :department-info="DepartmentOptions" class="introduce-department"></ShowDepartment>
        <h3>最后</h3>
        <h3> 如果你对技术充满热情， </h3>
        <h3> 如果你也想策划一场盛大的活动， </h3>
        <h3> 如果你也不甘被环境束缚， </h3>
        <h3> .... </h3>
        <h3> 现在 </h3>
        <h3 @click="toPath('contact')"> 加入我们! </h3>

        <div class="contact"> </div>
    </div>
</template>

<script lang="ts" setup>
import { onUnmounted, onMounted, ref } from 'vue';
import Lottie from '../../components/lottie/index.vue'
import downAnimation from '../../assets/json/BTsbjrdnOB.json'
import earthAnimation from '../../assets/json/WHYgLYppqB.json'
import throttle from '../../utils/throttle'
import { DepartmentOptions } from '../../components/HomeComponent/options'
import { defineAsyncComponent } from 'vue';
import { useLoadingBar } from 'naive-ui'
import LogoCanvas from '../../components/HomeComponent/LogoCanvas.vue';
import router from '../../router';

//异步组件加载
const isLoaded = ref(false)
const HorizontalScroll = defineAsyncComponent(() => {
    return import('../../components/HomeComponent/HorizontalScroll.vue')
})
const ShowDepartment = defineAsyncComponent(() => {
    return import('../../components/HomeComponent/ShowDepartment.vue')
})

// const playbackConst = 200
// const videoEl = ref()
//滚动条Y坐标
const sY = ref()
//渐变字体参数
const perpecetage = ref("100%")
//横向滑动固定
const isAffix = ref(false)
//横向滑动左偏移量
// const horizontalLeft = ref(0)
//横向滑动下滑Y轴最大值
// const horizontalDown = 6000
// 加载条
const loadingBar = useLoadingBar()


const scrollHeight = throttle(() => {
    sY.value = window.scrollY
    // if (window.scrollY < 1700) window.requestAnimationFrame(scrollPlay);
    if (window.scrollY > 2700 && window.scrollY < 3500) perpecetageFn(2700)
    if (window.scrollY > 3000) isLoaded.value = true
}, 100)

// const scrollPlay = () => {
//     let frameNumber = window.scrollY / playbackConst;
//     videoEl.value.currentTime = frameNumber;
//     // console.log(frameNumber);
// }

const perpecetageFn = (x: number) => {
    let temp = 1 - (window.scrollY - x) / document.documentElement.clientHeight
    if (temp * 100 > 0) {
        perpecetage.value = temp * 100 + '%'
    }
}

const toPath = (url: string) => {
    router.push({ name: url })
}


onMounted(() => {
    window.addEventListener('scroll', scrollHeight)

    // 开启加载条
    loadingBar.start()
    // 开启定时器
    let timer = setInterval(() => {
        console.log(document.readyState)
        // 判断资源加载完成
        if (document.readyState === 'complete') {
            loadingBar.finish()
            window.clearInterval(timer)
        }
    }, 500)
})

onUnmounted(() => {
    window.removeEventListener('scroll', scrollHeight)
})


</script>

<style scoped>
h1 {
    font-size: 5vw;
    margin: 15px 0;
}

h3 {
    font-size: 2vw;
    font-weight: bold;
    letter-spacing: 2px;
}

h2 {
    color: transparent;
    font-size: 2vw;
    margin: 0;
    padding: 0;
    letter-spacing: -0.3px;

    background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 66.67%, rgba(255, 255, 255, 0) 100%);

    background-size: 300% 100%;
    background-position-x: v-bind(perpecetage);
    background-clip: text;
    -webkit-background-clip: text;

}


span {
    font-size: 5vw;
    color: #6e6e73;
}

.nothing {
    visibility: hidden;
    transition: 0.5s visibility initial;
}

.video-box {
    width: 100%;
    height: 2600px;
    position: relative;
    background-color: var(--base-color);
    z-index: -11;
}

.animation-down {
    width: 100px;
    height: 100px;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 90vh auto;
    z-index: -9;
}

.animation-earth {
    width: 50vw;
    height: 50vh;
    position: absolute;
    left: 100px;
    top: 90vh;
    opacity: 0.4;
}

.video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
}

.introduce {
    padding-left: 20vw;
    background-color: var(--base-color);
    color: var(--text-color-base);
    text-align: left;
}

.introduce-word {
    padding: 100px 0 300px 0;
}

.introduce-story {
    margin: 200px 20vw 0 0;
    /* border-top: 1px solid rgba(255, 255, 255, 0.345); */

    position: relative;
    top: 0;
}

.introduce-story2 {
    margin-top: 100vh;
}

.introduce-department {
    margin-bottom: 180px;
}

.contact {
    height: 230px;
}

/* 移动端 */
@media screen and (max-width: 992px) {
    h1 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    span {
        font-size: 1.5rem;
    }
}
</style>