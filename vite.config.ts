// @ts-nocheck
import { defineConfig, CommonServerOptions } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import dotenv, { DotenvParseOutput } from 'dotenv'


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig((mode) => {

  //拼接当前环境文件名
  const envFileName: String = '.env'
  const curFileName = `${envFileName}.${mode.mode}`

  //当前环境模式
  const curEnv: string = mode.mode
  let server: CommonServerOptions = {}

  const envData = fs.readFileSync(curFileName)
  const envConf: DotenvParseOutput = dotenv.parse(envData)
  if (curEnv === "development") {
    server = {
      host: envConf.VITE_HOST,
      port: envConf.VITE_PORT,
      proxy: {
        [envConf.VITE_BASE_URL]: {
          target: envConf.VITE_PROXY_DOMAIN
        }
      }

    }
    // console.log("开发环境",server)


  } else if (curEnv === "production") {
    console.log("生产环境")
    server = {
      host: envConf.VITE_HOST,
      port: envConf.VITE_PORT,
      proxy: {
        [envConf.VITE_BASE_URL]: {
          target: envConf.VITE_PROXY_DOMAIN
        }
      }

    }
  }

  return {
    plugins: [vue()],
    server
  }
})