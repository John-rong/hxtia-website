//引入 Web SDK，
import cloudbase from '@cloudbase/js-sdk';

//初始化 SDK
const tcbapp = cloudbase.init({
    env: 'hxtia-1ga9hk9l6bf6ec15'// 环境 ID
});

//登录认证
const auth = tcbapp.auth({
    persistence: "local" //用户显示退出或更改密码之前的30天一直有效
});

async function login() {
    // 调用匿名登录接口
    await auth.anonymousAuthProvider().signIn();
    // 匿名登录成功后，登录状态isAnonymous字段值为true
    const loginState = await auth.getLoginState();
    console.log("cloudbase",loginState?.isAnonymousAuth); // true
}

login();

export default tcbapp
