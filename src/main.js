import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import { ClientTable } from 'vue-tables-2'
Vue.use(ClientTable)

import CustomAlert from '@/components/CustomAlert.vue'
Vue.component('custom-alert', CustomAlert)

import moment from 'moment'
Vue.prototype.moment = moment

store.dispatch('validate')

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
