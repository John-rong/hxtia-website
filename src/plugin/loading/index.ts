import {createVNode, type App, render} from 'vue'
import loading from './Loading.vue'

export default {
    install(app:App){
        console.log('全局loading插件执行')
        //vue组件转为Vnode,然后渲染
        const vnode = createVNode(loading)
        render(vnode,document.body)
        //给Vue对象全局挂载属性show，hide
        app.config.globalProperties.LOADING = {
            show:vnode.component?.exposed?.show,
            hide:vnode.component?.exposed?.hide
        }
        // console.log('挂载点属性:', vnode.component?.exposed, app.config.globalProperties.LOADING)
    }
}