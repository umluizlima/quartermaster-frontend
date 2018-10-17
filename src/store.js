import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import API from '@/utils/api'

Vue.use(Vuex)

const api = new API('/users')

export default new Vuex.Store({
  state: {
    token: '',
    id: null,
    user: {},
    error: ''
  },
  getters: {
    isLoggedIn: state => !!state.token,
    userId: state => state.user.id,
    isAdmin: state => state.user.admin,
    user: state => state.user,
    error: state => state.error
  },
  mutations: {
    start (state, user) {
      state.token = localStorage.getItem('token')
      state.id = localStorage.getItem('id')
      state.user = user
    },
    login (state) {
      state.token = localStorage.getItem('token')
      state.id = localStorage.getItem('id')
    },
    logout (state) {
      state.token = ''
      state.id = null
      state.user = {}
    },
    setError (state, message) {
      state.error = message
    },
    clearError (state) {
      state.error = ''
    }
  },
  actions: {
    login (context, data) {
      api.login(data)
        .then((resp) => {
          localStorage.setItem('token', resp.data.token)
          localStorage.setItem('id', resp.data.id)
          context.commit('login')
          context.dispatch('validate')
        })
        .catch((err) => {
          if (err.response.status === 400) {
            console.log('Deu erro')
            context.commit('setError', err.response.data.message)
          }
        })
    },
    logout (context) {
      api.logout()
        .then((resp) => {
          localStorage.removeItem('token')
          localStorage.removeItem('id')
          context.commit('logout')
        })
        .catch((err) => {
          if (err.response.status === 400) {
            context.commit('setError', err.response.data.message)
          }
        })
    },
    validate (context) {
      let id = localStorage.getItem('id')
      if (id) {
        api.getOne(id)
          .then((resp) => {
            context.commit('start', resp.data)
          })
          .catch((err) => {
            if (err.response.status === 400 || err.response.status === 404) {
              context.commit('logout')
            }
          })
      } else {
        context.commit('logout')
      }
    }
  }
})
