import { onMounted,onUnmounted, ref } from 'vue'

//节流函数
function throttle(fn: { (): void; (): void }, interval: number, options = {leading: true,trailing: true}) {
  let lastTime = 0
  
  const {leading,trailing} = options
  let timer: string | number | NodeJS.Timeout | null | undefined = null

  return function() {
      const nowTime = new Date().getTime()
      
      if(!lastTime && !leading) lastTime = nowTime
      
      const remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {

          if (timer){
              clearTimeout(timer)
              timer = null
          } 
          fn()
          lastTime = nowTime
          return
      }

      if (trailing && !timer) {
          timer = setTimeout(() => {
              timer = null
              lastTime = !leading ? 0: new Date().getTime()
              fn()
          }, remainTime)
      }
  }
}

export default function useScroll(elRef:any) {
  console.log('useScroll', elRef.value)
  let el = window
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight || document.body.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight || document.body.scrollHeight
      scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop
    } else {
      // clientHeight.value = el.clientHeight
      // scrollTop.value = el.scrollTop
      // scrollHeight.value = el.scrollHeight
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true
    } else {
      isReachBottom.value = false
    }
    console.log('scrollTop', scrollTop.value)
    console.log('clientHeight', clientHeight.value)
    console.log('scrollHeight', scrollHeight.value)
    console.log('isReachBottom', isReachBottom.value)
  }, 100)
  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    el.addEventListener('scroll', scrollListenerHandler)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}