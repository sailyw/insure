import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Registration from '@/views/Registration.vue'
import InfoSearch from '@/views/InfoSearch.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component:Login
  },
  {
    path: '/registration',
    name:'registration',
    component:Registration
  },
  {
    path: '/infoSearch',
    component:InfoSearch
  },
  {
    path:'/home',
    component:Home
  }
]

const router = new VueRouter({
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
