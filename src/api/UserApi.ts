import { LoginData, RegisterData } from '../store/user/state'
import request from '../utils/axiosUtil'

//用户登录注册api
class UserAPI {
    static api: UserAPI = new UserAPI()
    getUsersInfo(){
        
    }
    postLogin(data:LoginData){
        return request.post('/member/check_login',false,data)
    }
    postRegister(data:RegisterData){
        return request.post('/member/registe',false,data)
    }
}

export default UserAPI.api