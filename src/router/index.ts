import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"

const home = () => import('../views/home/Home.vue')
const login = () => import('../views/user/Login.vue')
const contact = () => import('../views/contact/Contact.vue')
const routes: RouteRecordRaw[] = [
  {
    name: 'default',
    path: '/',
    component: home
  },
  {
    name: 'home',
    path: '/home',
    component: home
  },
  {
    name: 'login',
    path: '/login',
    component: login
  },
  {
    name: 'contact',
    path: '/contact',
    component: contact
  }

]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

// 设置白名单(允许直接跳转的路由)
const whileList = ["/login", "/", "/home","/contact"];
// 设置前置守卫
router.beforeEach((to, _from, next) => {
  if (whileList.includes(to.path) || sessionStorage.getItem("mid")) {
    next();
  } else {
    window.$message.warning("请先登录...",)
    next("/login")
  }
});

export default router