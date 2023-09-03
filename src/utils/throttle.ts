//升级版节流函数
export default function throttle(fn: { (): void; (): void }, interval: number, options = { leading: true, trailing: true }) {
    let lastTime = 0
  
    const { leading, trailing } = options
    let timer: string | number | NodeJS.Timeout | null | undefined = null
  
    return function () {
      const nowTime = new Date().getTime()
  
      if (!lastTime && !leading) lastTime = nowTime
  
      const remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {
  
        if (timer) {
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
          lastTime = !leading ? 0 : new Date().getTime()
          fn()
        }, remainTime)
      }
    }
  }