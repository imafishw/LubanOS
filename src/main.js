import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// 引入 Vue组件
import VueAliplayerV2 from 'vue-aliplayer-v2'
// 引入axios组件
import axios from 'axios'
// import VueSocketIO from 'vue-socket.io'
import './reset/reset.scss'
import qs from 'qs'
// axios.defaults.baseURL = 'robotData'
Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueAliplayerV2)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
