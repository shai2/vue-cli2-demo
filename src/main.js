import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import vueLazyload from 'vue-lazyLoad'
import './util/fonts/iconfont.css'
import 'assets/jquery-3.2.1.min.js'
import { myToast } from 'util/toast.js'
import { myConsole, myAlert} from 'util/console'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
Vue.use(Vant)
// vconsole加载
// import vConsole from 'vconsole/dist/vconsole.min.js'
// let VConsole = new vConsole();
// -------------------------------------------------------------------------
// 设置一些全局变量
// Vue.prototype.url = process.env.baseURL 
// -------------------------------------------------------------------------

// 挂到全局
Vue.prototype.$Toast = myToast
window.c = myConsole
window.a = myAlert


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
