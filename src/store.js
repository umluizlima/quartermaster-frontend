import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '@/utils/api'

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
      localStorage.setItem('token', data.token)
      localStorage.setItem('id', data.id)
      context.commit('login')
      context.dispatch('validate')
    },
    logout (context) {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      context.commit('logout')
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
