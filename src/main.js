import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios'

Vue.prototype.$Axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app')
