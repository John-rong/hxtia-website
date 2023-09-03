<template>
    <div class="canvas-container">
        <canvas ref='canvas'></canvas>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, nextTick, onUnmounted } from 'vue'
// import tcbapp from '../../utils/tcbInit'
import { getCurrentInstance } from 'vue'

// 拿到实例，加载loading
const loading = getCurrentInstance()
// img加载完成数
let imgCompleted = 0
//图片初始序号
const picFirst = 17
//图片总数量
const picTotal = 128
//图片缓存列表
const imgList: any[] = []
//屏幕宽高
const state = reactive({
    w: document.documentElement.clientWidth,
    h: document.documentElement.clientHeight,
    imgw: 2560,
    imgh: 1440,
})
const canvas = ref();
let ctx = ref();

const scrollUpdate = () => {
    const scrollTop = window.scrollY
    const maxNum = 2600 - window.innerHeight
    const val = scrollTop / maxNum
    const index = Math.min(picTotal - 1, Math.ceil(val * picTotal))
    if (scrollTop < 3000) {
        requestAnimationFrame(() => updateEvent(index + 1))
    }

}
onMounted(() => {

    // 开启loading
    loading?.proxy?.LOADING.show()

    // try {
    //     getImglist()
    // } catch (error) {
    //     window.$message.error('加载失败')
    // }

    initContext()

    window.addEventListener("scroll",scrollUpdate)
})

onUnmounted(() => {
    window.removeEventListener('scroll',scrollUpdate)
})

nextTick(() => {
    state.w = document.documentElement.clientWidth
    state.h = document.documentElement.clientHeight
})

// 初始化画布
const initContext = () => {
    ctx.value = canvas.value.getContext('2d');

    const img = new Image()
    img.src = logoImg(picFirst)
    canvas.value.width = state.w
    canvas.value.height = state.h

    img.onload = function () {
        if (state.w > 700) {
            ctx.value.drawImage(img, 0, 0, state.imgw, state.imgh, 0, 0, state.w, state.h)
        } else {
            ctx.value.drawImage(img, 950, 0, state.imgw, state.imgh, 0, 0, 1300, state.h)
        }

        if (img.complete) {
            imgCompleted++
        }
    }

    window.onload = loadEvent()

}

// 加载图片
const logoImg = (index: number) => {
    //https://6878-hxtia-1ga9hk9l6bf6ec15-1312056588.tcb.qcloud.la/logoimg/00128.png
    // if (index < 100) {
    //     return imgFile.slice(0, -6) + `${index}.png`
    // } else {
    //     return imgFile.slice(0, -7) + `${index}.png`
    // }
    if (index < 100) {
        return `https://john-hxtia-1312056588.cos.ap-shanghai.myqcloud.com/logoimg/000${index}.png`
    } else {
        return `https://john-hxtia-1312056588.cos.ap-shanghai.myqcloud.com/logoimg/00${index}.png`
    }
}

// 浏览器缓存图片，页面加载初始化
const loadEvent: any = () => {
    for (let i = picFirst; i < picTotal + picFirst; i++) {
        const imgs = new Image()
        imgs.src = logoImg(i)
        imgList.push(imgs)

        imgs.onload = () => {
            imgCompleted++
            if (imgCompleted === picTotal) {
                //关闭loading
                loading?.proxy?.LOADING.hide()
            }
        }

    }


}


const updateEvent = (index: number) => {
    let img = new Image()
    if (index < Number(picTotal)) {
        img = imgList[index]
        ctx.value?.clearRect(0, 0, canvas.value.width, canvas.value.height)
    }

    // img.src = logoImg(index)
    if (state.w > 700) {
        ctx.value?.drawImage(img, 0, 0, state.imgw, state.imgh, 0, 0, state.w, state.h)
    } else {
        ctx.value?.drawImage(img, 900, 0, state.imgw, state.imgh, 0, 0, 1300, state.h)
    }
}


</script>

<style scoped>
.canvas-container {
    position: sticky;
    top: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    z-index: -10;
}
</style>