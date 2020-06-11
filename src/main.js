import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import SlideVerify from 'vue-monoplasty-slide-verify';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
// import { request } from './api';

// Vue.prototype.$axios = axios;
/**
 * @description 全局注册请求变量
 */
// Vue.prototype.$request = request;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(SlideVerify);

new Vue({
  router,
  store,
  render: h => h(App),
  data:{
    // 空的实例放到根组件下，所有的子组件都能调用
    Bus: new Vue()
  }
}).$mount('#app')
