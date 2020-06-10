/* eslint-disable */
import router from '@/router';
import axios from 'axios';
import Vue from 'vue';
import { Toast } from 'vant';
import { session } from '@/libs/location';

// import baseUrl from '../config/deployUrl';
// export let baseURL = baseUrl;
Vue.use(Toast);
// 自定义判断元素类型JS
function toType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}

// 参数过滤函数
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim();
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key]);
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
}

// axios 全局变量 //
// axios.defaults.baseURL = baseURL
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true; // 让ajax携带cookie

// 请求拦截器
axios.interceptors.request.use(
  function(config) {
    let initParams = session.parseJSON();
    // console.log(initParams)
    config.headers.common['authorization-token'] =
      initParams === null ? '' : initParams;
    config.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded;charset=UTF-8';
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    // let message = response.data.message
    let code = response.data.code;
    // console.log(message, 'message')
    // console.log(status, 'status')
    if (code === 200) {
    } else {
      // 后台返回token状态 判断是否过期
      if (code === 10002) {
        session.remove('token');
        Toast(response.data.message);
        router.push({
          name: 'Login'
        });
      } else {
        if (response.status===200) {
        } else {
          Toast(response.data.message);
        }
      }
      // Toast(response.data.message)
      // router.push({
      //   name: 'Login'
      // })
    }
    return response;
  },
  function(error) {
    let errmsg = '网络异常';
    Toast(errmsg);
    return Promise.reject(error);
  }
);
/**
 * 定义 get post 请求
 */
export const request = {
  get: function(url, data) {
    if (data) {
      data = filterNull(data);
    }
    let config = {
      baseURL: baseURL,
      method: 'get',
      url: url,
      params:
        data ||
        {
          /* get请求参数 */
        }
    };
    return axios(config);
  },
  post: function(url, data) {
    if (data) {
      data = filterNull(data);
    }
    let config = {
      baseURL: baseURL,
      method: 'post',
      url: url,
      data:
        data ||
        {
          /* post请求参数 */
        }
    };
    return axios(config);
  },
  upload: function(url, data) {
    if (data) {
      data = filterNull(data);
    }
    let config = {
      baseURL: baseURL,
      method: 'post',
      url: url,
      data:
        data ||
        {
          /* post请求参数 */
        },
      headers: { 'Content-Type': 'multipart/form-data' }
    };
    return axios(config);
  },
  fileUpload: function(item, url) {
    let param = new FormData();
    Object.keys(item).forEach(function(key) {
      param.append(key, item[key]);
    });
    return axios.post(url, param, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  deleteFile: function(url, data) {
    let config = {
      // baseURL: 'http://develop.clianmeng.cn/njwd_image/',
      method: 'get',
      url: url,
      params:
        data ||
        {
          /* get请求参数 */
        }
    };
    return axios(config);
  },
  multipleRequest: function(requests) {
    let reqArray = [];
    if (requests.length > 0) {
      for (let req of requests) {
        if (req.method === 'GET') {
          reqArray.push(
            axios.get(req.url, {
              params: req.data
            })
          );
        } else if (req.method === 'POST') {
          reqArray.push(axios.post(req.url, req.data));
        }
      }
      return axios.all(reqArray);
    }
  }
};
