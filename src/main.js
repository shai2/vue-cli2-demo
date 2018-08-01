import 'babel-polyfill'
import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
// import vueLazyload from 'vue-lazyLoad'
import './util/fonts/iconfont.css'
import axios from 'axios'
import 'assets/jquery-3.2.1.min.js'
import storage from 'good-storage'
import { myToast } from 'util/common.js'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)
// vconsole加载
// import vConsole from 'vconsole/dist/vconsole.min.js'
// let VConsole = new vConsole();
// -------------------------------------------------------------------------
// 300ms延迟
// import fastclick from 'fastclick'
// fastclick.attach(document.body)
// -------------------------------------------------------------------------
// axios默认配置
Vue.prototype.$ajax = axios;
axios.defaults.timeout ==20000;
axios.defaults.headers = {'sessionId':storage.get('sessionId','')}
console.log('sessionId',storage.get('sessionId',''))
// console.log(process.env.NODE_ENV,process.env.baseURL) // dev时development build为production
if (process.env.NODE_ENV==="development") { //开发
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = '/api'
}else{ //生产
    axios.defaults.baseURL = process.env.baseURL
}
Vue.prototype.url = process.env.baseURL //全局变量url
// -------------------------------------------------------------------------
// 挂toast
Vue.prototype.$Toast = myToast

window.c = function(...txt){
    for(let e of txt){
        console.log(e)
    }
}
window.a = function(...txt){alert(txt)}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
