import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/common/initCss.css";
Vue.config.productionTip = false

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue