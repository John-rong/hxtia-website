//前后端交互配置类
interface BaseConf{
    baseApi:string //基础配置
    mockBaseApi:string
}
//环境配置
interface EnvConf{
    development:BaseConf
    production:BaseConf
}
//配置所有信息
class AllConf{
    env!:keyof EnvConf
    isMock:boolean = false
    baseApi !:string
    mockBaseApi!:string
}

class EnvConfigClass{
    static envConfigClass:EnvConfigClass = new EnvConfigClass()
    readonly curEnv = import.meta.env.MODE ==='development'?'development':'production'
    envConf!:EnvConf
    allConf!:AllConf
    constructor(){
        this.initEnvConf()
        this.getAllConf()
    }
    getAllConf(){
        this.allConf={
            env:this.curEnv,
            isMock:false,
            ...this.envConf[this.curEnv]
        }
    }
    initEnvConf(){
        this.envConf={
            development:{
                baseApi:'/api',
                mockBaseApi:''
            },
            production:{
                baseApi:'/',
                mockBaseApi:''
            }
        }
    }
}

export default EnvConfigClass.envConfigClass.allConf