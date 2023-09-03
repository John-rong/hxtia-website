import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    // AxiosResponse,                                                                                                                    
    AxiosPromise
} from 'axios'
import conf from '../config'

interface AxiosRequestConfig_ extends AxiosRequestConfig{
    isMock:boolean
}
type Method = 'get' | 'post' | 'put' | 'delete' | 'patch'
const methods: Method[] = ['get', 'post', 'put', 'delete', 'patch']
type ReqFn = (url: string, isMock: boolean, data?: any) => AxiosPromise<any>
interface ReqExecute {
    get: ReqFn
    post: ReqFn
    put: ReqFn
    delete: ReqFn
    patch: ReqFn
}

class AxiosUtil {
    static axiosUtil: AxiosUtil = new AxiosUtil()
    axiosInstance!: AxiosInstance
    request!: ReqExecute
    constructor() {
        this.request = {
            'get': (): any => { },
            'post': (): any => { },
            'put': (): any => { },
            'delete': (): any => { },
            'patch': (): any => { }
        }
        this.createAxiosInstance()
        this.beforeReqIntercept()
        this.beforeResponseIntercept()
        this.reqPrepare()
    }
    createAxiosInstance() {
        this.axiosInstance = axios.create({ timeout: 15000 })
        axios.defaults.withCredentials = true
    }
    //请求拦截器
    beforeReqIntercept() {
        this.axiosInstance.interceptors.request.use((request) => {

            // const token = storage.get('token')
            return request
        })
    }
    //响应拦截器
    beforeResponseIntercept() {
        
        this.axiosInstance.interceptors.response.use((response) => {
            console.log("响应",response)
            const { data, message, code } = response.data
            console.log("响应返回",data)

            if (code === "0"){
                window.$message.success(`成功：${message}`)
                return response.data
            } else if (code === 500) {
                window.$message.error(`发生错误：${message}`)
                return
            } else {
                window.$message.error(`错误：${message}`)
                return
            }
        }, (err) => {
            window.$message.error(`网络错误${err}`)
        })
    }
    //发送请求给服务器
    sendRequst(options: AxiosRequestConfig_) {
        if(conf.env === 'development'){
            this.axiosInstance.defaults.baseURL = conf.baseApi
        }else if(conf.env === 'production'){
            const isMock:boolean = options.isMock|| conf.isMock
            this.axiosInstance.defaults.baseURL=isMock
                ?conf.mockBaseApi
                :conf.baseApi
        }
        return this.axiosInstance(options)
    }
    //深入灵活应用TS完成请求类型自动提示
    reqPrepare() {
        return methods.forEach((method) => {
            if(method === 'post'){
                this.request[method] = (url, isMock, data) => {
                    return this.sendRequst({
                        url,
                        method,
                        data,
                        isMock,
                        headers:{"Content-Type": "application/x-www-form-urlencoded;"}
                    })
                }
            }else{
                this.request[method] = (url, isMock, data) => {
                    return this.sendRequst({
                        url,
                        method,
                        data,
                        isMock
                    })
                }
            }

        })
    }
}


export default AxiosUtil.axiosUtil.request;