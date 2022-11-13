import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router';
import store from './store'; 

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router,
  store,
  brforCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
