import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import '@/scss/main.scss'
import { capitalize, truncate } from './utils/filters'

[capitalize, truncate].forEach(filter => Vue.filter(filter.name, filter))

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
