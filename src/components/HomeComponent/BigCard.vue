<template>
    <div class="bigcard">
        <div class="three-img">
            <div class="card-img" v-for="img in bigCardobj.img" :key="img">
                <NImage :img-props="{ 'style': 'width:100%;border-radius: 10px;' }" lazy
                    :src="`${img}`"></NImage>
            </div>
        </div>
        <div class="card-headline">
            <div class="card-title">{{bigCardobj.title}}</div>
            <div class="card-text">
                <NIcon :component="ChevronBack" size="10" />{{bigCardobj.text}}
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ChevronBack } from '@vicons/ionicons5'
import { BigCardPorps } from './type'

defineProps<{
    bigCardobj: BigCardPorps
}>()

</script>

<style scoped>
.bigcard {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    width: 1600px;
}

.three-img {
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 800px;
}

.card-img {
    margin: 10px;
    width: 380px;
    border-radius: 10px;
    box-shadow: 0 0 0 8px rgb(255 255 255 / 20%);
}

.card-img:hover {
    box-shadow: 0 0 0 8px var(--text-color-1);
    transition: box-shadow 1 ease-in;
}

.card-headline {
    width: 400px;
}

.card-title {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 3px;
    line-height: inherit;
}

.card-text {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: inherit;
    max-width: 350px;
    text-align: left;
    white-space: break-spaces;
    padding: 10px 0;
    border-bottom: 2px solid var(--text-color-base);
}
</style>  