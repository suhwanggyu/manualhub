import Vue from 'vue';
import ElementUI from 'element-ui';
import Vue2Editor from "vue2-editor";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios'

Vue.prototype.$Axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
<<<<<<< HEAD
=======
Vue.use(Vue2Editor);
Vue.config.productionTip = false
>>>>>>> a8c91eb0c01c0005bfe11054f8201cfd36af1669

new Vue({
  render: h => h(App),
}).$mount('#app')
