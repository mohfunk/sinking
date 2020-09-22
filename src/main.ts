import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'p5';
import 'p5/lib/addons/p5.sound.js';
require('@/assets/css/fonts.css');
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
