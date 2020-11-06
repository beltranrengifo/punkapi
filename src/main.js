import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/scss/main.scss'
import { capitalize } from './utils/filters'

Vue.config.productionTip = false
Vue.filter('capitalize', capitalize)

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
