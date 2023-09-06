<template>
    <div class="department-content">
        <div class="detail-box">
            <div class="detail">
                <div class="user">
                    <div class="info">
                        <div class="title">科技创新协会</div>
                        <div class="position">{{ itemTitle }}</div>
                    </div>
                </div>
                <div class="desc">
                    <div class="text">{{ itemText }}</div>
                    <p>详细内容见投递页面</p>
                </div>
            </div>
        </div>
        <div class="list-box">

            <div id="topic-scroll" class="list-wrap">

                <div class="item" :class="itemIndex == item.id ? 'active' : ''" @click="toActive(item.id)"
                    v-for="item in departmentInfo" :key="item.id">
                    <div class="title-box">
                        <div class="title-wrap">
                            <div class="title">{{ item.title }}</div>
                            <div class="position"><span>体系： </span><span>{{ item.position }}</span></div>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="user">
                            <div class="info">
                                <div class="title">科技创新协会</div>
                                <div class="position">{{ item.title }}</div>
                            </div>
                        </div>
                        <div class="text">{{ item.text }}
                            <p>详细内容见投递页面</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { DepartmentPorps } from './type'
const props = defineProps<{
    departmentInfo: DepartmentPorps[]
}>()

// 选中的item
const itemIndex = ref(0)
const itemTitle = ref("科协")
const itemText = ref("科协")

const toActive = (index: number) => {
    itemIndex.value = index
    itemTitle.value = props.departmentInfo[index].title
    itemText.value = props.departmentInfo[index].text
}

onMounted(() => {
    toActive(0)
})





</script>

<style scoped>
p {
    color: var(--base-color);
    opacity: 0.3;
    font-size: 0.1rem;
}

.department-content {
    margin-top: 60px;
    width: 80%;
    display: flex;
    align-items: stretch;
    font-size: 1rem;
}

.department-content .detail-box {
    flex: 1;
    padding-right: 50px;
}

.department-content .detail-box .detail {
    padding: 80px;
    min-height: 384px;
    border-radius: 14px;
    background: linear-gradient(90deg, var(--text-color-base), #c5ccf0);
    transition: all .3s ease;
    position: relative;
    color: #0d1346;
}

@media screen and (max-width: 992px) {
    .department-content .detail-box .detail {
        display: none;
    }

    .department-content .detail-box {
        flex: 0;
        padding-right: 0;
    }

    .department-content #topic-scroll {
        position: static;
        overflow: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding-right: 6px;
    }

}

.department-content .detail-box .detail:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 164px;
    height: 162px;
    transform: translateY(-60px) translateX(-160px);
    /* background: url(https://files.wunderminibar.tk/2023/08/6d500a85bb5e6cebca20602b8d63e467.png) no-repeat 50%; */
    background: url(https://john-hxtia-1312056588.cos.ap-shanghai.myqcloud.com/logoimg/hxlogo.png) no-repeat 50%;
    background-size: contain;
    pointer-events: none;
}

.department-content .detail-box .detail .user {
    font-size: 22px;
    font-weight: 700;
    color: var(--base-color);
}

.department-content .detail-box .detail .user .title {
    opacity: 0.5;
}

.department-content .detail-box .detail .desc {
    margin-top: 22px;
    border-top: 1px dashed var(--base-color);
}

.department-content .detail-box .detail .desc .text {
    font-size: 16px;
    line-height: 1.5;
    padding: 18px 0;
}

.department-content .list-box {
    flex: 1;
    position: relative;
}

.department-content .list-wrap {
    position: absolute;
    top: 0;
    left: 0;
    /* height: 100%; */
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-right: 6px;
}

.department-content .list-wrap .item {
    margin-bottom: 12px;
    cursor: pointer;
}

.department-content .list-box .item.active .title-box {
    background: #4a62f7;
    transition: all .3s ease;
}

.department-content .list-box .item .title-box {
    padding: 13px 45px;
    border-radius: 14px;
    background: linear-gradient(90deg, var(--text-color-base), #c5ccf0);
    transition: all .3s ease;
}

.department-content .list-box .item .title-box .title-wrap .title {
    font-size: 22px;
    font-weight: 700;
    transition: all .3s ease;
    color: #0d1346;
}

.department-content .list-box .item.active .title-box .title-wrap .position,
.department-content .list-box .item.active .title-box .title-wrap .title {
    color: var(--text-color-base);
    transition: all .3s ease;
}

.department-content .list-box .item .title-box .title-wrap .position {
    margin-top: 1px;
    font-size: 16px;
    color: rgba(13, 19, 70, .7);
    display: flex;
    flex-wrap: wrap;
    transition: all .3s ease;
}



/* 移动端 */
.department-content .list-box .item .detail {
    display: none;
    margin-top: 5px;
    padding: 20px 30px;
    border-radius: 14px;
    background: linear-gradient(90deg, var(--text-color-base), #c5ccf0);
    transition: all .3s ease;
    background-size: 100% 100%;
    position: relative;
    color: var(--base-color);
}

.department-content .list-box .item.active .detail {
    display: none;
}

@media screen and (max-width: 992px) {
    .department-content .list-box .item.active .detail {
        display: block;
    }

}

.department-content .list-box .item .detail:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 5px;
    width: 79px;
    height: 78px;
    transform: translate(0);
    /* background: url(https://files.wunderminibar.tk/2023/08/6d500a85bb5e6cebca20602b8d63e467.png) no-repeat 50%; */
    background: url(https://john-hxtia-1312056588.cos.ap-shanghai.myqcloud.com/logoimg/hxlogo.png) no-repeat 50%;
    background-size: contain;
    pointer-events: none;
}

.department-content .list-box .item .detail .user {
    display: flex;
}

.department-content .list-box .item .detail .user .avatar {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    overflow: hidden;
}

.department-content .list-box .item .detail .text {
    font-size: 12px;
    color: rgba(13, 19, 70, .7);
    line-height: 1.5;
    padding: 12px 0;
}
</style>