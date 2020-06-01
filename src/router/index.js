import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Registration from '@/views/Registration.vue'
import InfoSearch from '@/views/InfoSearch.vue'

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
    component:Registration
  },
  {
    path: '/infoSearch',
    component:InfoSearch
  },
]

const router = new VueRouter({
  routes
})

export default router
