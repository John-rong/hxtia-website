<template>
    <!-- <n-affix :top="80" :trigger-top="80" :style="isAffix ? '':'position:static'"> -->
    <div class="index-group-box">

        <!-- 左滑提示 -->
        <Lottie class="index-group-box-left" :animation-data="slideleft"></Lottie>

        <!-- 卡⽚ -->
        <div class="index-group-boxIn" ref="groupBoxRef">
            <CardComponent :message="CardOptions"></CardComponent>
            <div class="index-group-line"></div>

            <BigCard v-for="item in groupInfo" :key="item.id" ref="groupCardRef" :big-cardobj="item"></BigCard>

        </div>

        <!-- 点击切换 -->
        <n-steps v-model:current="current" size='small' style="margin:30px 0px;overflow:hidden;" class="step">
            <n-step v-for="item in groupInfo" :key="item.id" :title="item.title" @click="toLeft(item.id)" />
        </n-steps>


    </div>
    <!-- </n-affix> -->
</template>
  

<script lang="ts" setup>
import Lottie from '../lottie/index.vue'
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import slideleft from '../../../src/assets/json/DTeyD3NZ3J.json'
import CardComponent from './CardComponent.vue'
import { CardOptions, BigCardOptions } from './options'
import { BigCardPorps } from './type'
import BigCard from './BigCard.vue';

//接收是否固定
defineProps<{
    isAffix: boolean
}>()

const groupInfo = ref<BigCardPorps[]>();

// 获取卡片列表
const getMyGroup = async () => {
    const data = BigCardOptions
    groupInfo.value = data;
}
getMyGroup();

const groupBoxRef = ref(); // 获取外层卡⽚ref
const groupCardRef = ref(); // 获取卡⽚ref
const scrollPosition = reactive({
    left: 0,
    top: 0
}); // 滚动位置

// 获取scroll函数的位置
const handleScroll = (e: { target: { scrollLeft: number; scrollTop: number; }; }) => {
    scrollPosition.left = e.target.scrollLeft;
    scrollPosition.top = e.target.scrollTop;
    // console.log(scrollPosition.left)
}

onMounted(() => {
    // 监听scroll事件
    groupBoxRef.value.addEventListener('scroll', handleScroll, true);
    groupBoxRef.value.addEventListener('wheel', (event: { preventDefault: () => void; deltaY: any; }) => {
        event.preventDefault()
        groupBoxRef.value.scrollLeft += event.deltaY
    })

})

onUnmounted(() => {
    groupBoxRef.value.removeEventListener('scroll', handleScroll);
    groupBoxRef.value.removeEventListener('wheel', (event: { preventDefault: () => void; deltaY: any; }) => {
        event.preventDefault()
        groupBoxRef.value.scrollLeft += event.deltaY
    })
})

// 点击切换
const current = ref<number | undefined>(1)
const toLeft = (num:number) =>{
    if(num == 1){
        groupBoxRef.value.scrollLeft = 500
    }else{
        groupBoxRef.value.scrollLeft = num*1000
    }
}


// watchEffect(()=>{
//     const l = props.horizontalLeft
//     scrollPosition.left = l
//     console.log("lll",l)
// })


</script>

<style scoped>
.index-group-box {
    /* padding-right: 16px; */
    box-sizing: border-box;
    width: 90vw;
    overflow: auto;
    position: relative;
    left: -15vw;
    margin-bottom: 200px;
}

.index-group-box-left {
    margin: 0 40px;
    width: 100px;
    transform: rotate(180deg) rotateY(180deg);
}

.scrollX {
    width: 16px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #512D6D;
    display: flex;
    justify-content: center;
    align-items: center
}

.scrollX:hover {
    cursor: pointer;
    background-color: #65447d;
}

.index-group-boxIn {
    display: flex;
    scroll-behavior: smooth;
    white-space: nowrap;
    overflow-x: auto;
    flex: none;
    scrollbar-width: none;
}

.index-group-boxIn::-webkit-scrollbar {
    display: none;
}

.index-group-line {
    width: 200px;
    height: 2px;
    background-color: var(--text-color-base);
    flex: none;
    margin: auto;
}

@media screen and (max-width: 992px) {

    .step{
        visibility: hidden;
    }

}
</style>
