import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import router from './router/router.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
