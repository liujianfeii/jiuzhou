import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.baseURL="http://localhost:8000"
Vue.prototype.$http=axios
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
