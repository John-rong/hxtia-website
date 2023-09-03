<template>
    <div class="card" :class="cut ? '' : 'is-active'">
        <div class="card-header">
            <div class="card-cover" :style="`background-image: url(${message.bgimg});`">
            </div>
            <img class="card-avatar" :src="`${message.img}`" alt="avatar" />
            <h1 class="card-fullname">{{ message.fullname }}</h1>
            <h2 class="card-jobtitle">{{ message.title }}</h2>
        </div>
        <div class="card-main">
            <div class="card-section" :class="cut ? 'is-active' : ''" id="about">
                <div class="card-content">
                    <div class="card-subtitle">{{ message.subtitle1 }}</div>
                    <p class="card-desc">{{ message.subcontent1 }}</p>
                </div>
            </div>
            <div class="card-section" :class="cut ? '' : 'is-active'" id="experience">
                <div class="card-content">
                    <div class="card-subtitle">{{ message.subtitle2 }}</div>
                    <p class="card-desc">{{ message.subcontent2[0] }}</p>
                </div>
            </div>
            <div class="card-buttons">
                <button data-section="#about" :class="cut ? 'is-active' : ''" @click="toCut(true)">{{ message.subtitle1
                }}</button>
                <button data-section="#experience" :class="cut ? '' : 'is-active'"
                    @click="toCut(false)">{{ message.subtitle2 }}</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CardPorps } from './type'

//接收值
defineProps<{
    message: CardPorps
}>()

const cut = ref(true)
const toCut = (flag: boolean) => {
    cut.value = flag
}
</script>

<style>
.card {
    max-width: 300px;
    min-width: 300px;
    max-height: 600px;
    margin: 20px;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    /* background-color: white; */
    display: flex;
    transition: 0.3s;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
    color: var(--text-color-base);
    flex: none;
}

.card.is-active .card-header {
    height: 80px;
}

.card.is-active .card-cover {
    height: 100px;
    top: -50px;
}

.card.is-active .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
}

.card.is-active .card-fullname,
.card.is-active .card-jobtitle {
    left: 86px;
    transform: none;
}

.card.is-active .card-fullname {
    bottom: 18px;
    font-size: 19px;
}

.card.is-active .card-jobtitle {
    bottom: 16px;
    letter-spacing: 1px;
    font-size: 10px;
}

.card-header {
    position: relative;
    display: flex;
    height: 200px;
    flex-shrink: 0;
    width: 100%;
    transition: 0.3s;
}

.card-header * {
    transition: 0.3s;
}

.card-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    height: 160px;
    top: -20%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    transform: scale(1.2);
    transition: 0.5s;
}

.card-avatar {
    width: 100px;
    height: 100px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
    position: absolute;
    bottom: 0;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
}

.card-jobtitle {
    position: absolute;
    bottom: 0;
    font-size: 11px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-7px);
}

.card-main {
    position: relative;
    flex: 1;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
}

.card-subtitle {
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 8px;
}

.card-content {
    padding: 20px;
}

.card-desc {
    line-height: 1.6;
    color: var(--text-color-2);
    font-size: 14px;
    margin: 0;
    font-weight: bold;
    white-space: break-spaces;
}

.card-buttons {
    display: flex;
    /* background-color: #fff; */
    margin-top: auto;
    position: sticky;
    bottom: 0;
    left: 0;
}

.card-buttons button {
    flex: 1 1 auto;
    user-select: none;
    background: 0;
    font-size: 13px;
    border: 0;
    padding: 15px 5px;
    cursor: pointer;
    color: var(--text-color-base);
    transition: 0.3s;
    font-family: "Jost", sans-serif;
    font-weight: 500;
    outline: 0;
    border-bottom: 3px solid transparent;
}

.card-buttons button.is-active,
.card-buttons button:hover {
    color: var(--text-color-base);
    border-bottom: 3px solid #8a84ff;
    background: linear-gradient(to bottom, rgba(127, 199, 231, 0) 0%, rgba(207, 204, 255, 0.2) 44%, rgba(211, 226, 255, 0.4) 100%);
}

.card-section {
    display: none;
}

.card-section.is-active {
    display: block;
    animation: fadeIn 0.6s both;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translatey(40px);
    }

    100% {
        opacity: 1;
    }
}
</style>