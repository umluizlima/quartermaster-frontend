import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import CustomAlert from '@/components/CustomAlert.vue'

import moment from 'moment'
import './registerServiceWorker'
Vue.use(BootstrapVue)
Vue.component('custom-alert', CustomAlert)
Vue.prototype.moment = moment

// store.dispatch('validate')

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
