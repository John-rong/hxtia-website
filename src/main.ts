import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ImgUtil } from './utils/imgUtils'
import router from './router'
import { createPinia } from 'pinia'
import loading from './plugin/loading'

import {
    // create naive ui
    create,
    // component
    NButton,
    NMessageProvider,
    NDialogProvider,
    NLoadingBarProvider,

    // NLayout,
    // NLayoutSider,
    // NMenu,
    // NGradientText,
    // NInputGroup,
    // NTag,
    // NDatePicker,
    
    NAvatar,
    NIcon,
    NInput,
    NCard,
    NTabs,
    NTabPane,
    NForm,
    NFormItemRow,
    NFormItem,
    NAutoComplete,

    NDropdown,
    NAffix,
    NImage,
    NStep,
    NSteps,
    

} from 'naive-ui'


const naive = create({
    components: [NButton, NMessageProvider, NLoadingBarProvider, NDialogProvider,

        // NLayout,
        // NLayoutSider, 
        // NMenu, 
        // NGradientText, 
        // NInputGroup, 
        // NTag, 
        // NDatePicker,

        NAvatar,
        NIcon, 
        NInput, 
        NCard,
        NTabs, 
        NTabPane, 
        NForm, 
        NFormItemRow, 
        NFormItem,
        NAutoComplete,

        NDropdown,
        NAffix,
        NImage,
        NStep,
        NSteps

    ]
})

ImgUtil.storageImgList()


interface LOADING {
    show(): null
    hide(): null
}

declare module 'vue' {
    export interface ComponentCustomProperties {
        LOADING: LOADING
    }
}

createApp(App).use(naive).use(router).use(createPinia()).use(loading).mount('#app')
