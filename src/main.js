import Vue from 'vue'
import App from './App.vue'
import router from './router'

import moment from 'moment'
Vue.prototype.moment = moment


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import { ClientTable } from 'vue-tables-2'
Vue.use(ClientTable)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
