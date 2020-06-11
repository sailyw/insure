import Vue from 'vue'
import VueRouter from 'vue-router'
// import { session } from '@/libs/location';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: ()=>import("@/views/Home.vue")
  },
  {
    path: '/login',
    name:"login",
    component: ()=>import("@/views/Login.vue")
  },
  {
    path: '/registration',
    name:'registration',
    component: ()=>import("@/views/Registration.vue")
  },
  {
    path: '/infoSearch',
    name:'infoSearch',
    component: ()=>import("@/views/InfoSearch.vue")
  },
  {
    path:'/home',
    name:'home',
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
//   // let token = session.parseJSON();
//   let token = true
//   if (token) {
//     next();
//   } else {
//     next({
//       name: 'Login'
//     });
//   }

  // if(to.path=='/login'){
  //   next();
  // }else{
  //   //是否在登录状态下
  //   isLogin ? next() :next("/login");
  // }
// })

//路由守卫
router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.picc_login?true:false;
  if(to.path=='/login'){
    next();
  }else{
    //是否在登录状态下
    isLogin ? next() :next("/login");
  }
})
export default router
