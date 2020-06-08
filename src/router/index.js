import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: ()=>import("@/views/Login.vue")
  },
  {
    path: '/login',
    component: ()=>import("@/views/Login.vue")
  },
  {
    path: '/registration',
    name:'registration',
    component: ()=>import("@/views/Registration.vue")
  },
  {
    path: '/infoSearch',
    component: ()=>import("@/views/InfoSearch.vue")
  },
  {
    path:'/home',
    component: ()=>import("@/views/Home.vue")
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//路由守卫
// router.beforeEach((to,from,next)=>{
//   const isLogin = localStorage.picc_login?true:false;
//   if(to.path=='/login'){
//     next();
//   }else{
//     //是否在登录状态下
//     isLogin ? next() :next("/login");
//   }
// })
export default router
