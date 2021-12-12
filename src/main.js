import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';


//全部引入了，以后再修改成按需引入
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    //安装全局事件总线
    beforeCreate() {
      Vue.prototype.$bus = this 
    },
  render: h => h(App),
}).$mount('#app')
