import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.component('HelloWorld', require('./components/HelloWorld.vue').default);

new Vue({
  render: h => h(App),
}).$mount('#app')
