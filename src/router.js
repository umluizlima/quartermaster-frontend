import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/categorias',
      name: 'category',
      component: () => import('./views/Category.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/itens',
      name: 'item',
      component: () => import('./views/Item.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/terceiros',
      name: 'thirdparty',
      component: () => import('./views/Thirdparty.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/usuarios',
      name: 'user',
      component: () => import('./views/User.vue'),
      meta: {
        requiresAdmin: true
      }
    },
    {
      path: '/emprestimos',
      name: 'lending',
      component: () => import('./views/Lending.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/reservas',
      name: 'reservation',
      component: () => import('./views/Reservation.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/entrar',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth === false)) {
    if (store.getters.isLoggedIn === true) {
      next('/')
      return
    } else {
      next()
      return
    }
  }
  if(to.matched.some(record => record.meta.requiresAuth === true)) {
    if (store.getters.isLoggedIn === true) {
      next()
      return
    } else {
      next('/entrar')
      return
    }
  }
  if(to.matched.some(record => record.meta.requiresAdmin === true)) {
    if (store.getters.isLoggedIn === true) {
      if (store.getters.isAdmin === true) {
        next()
        return
      } else {
        next('/')
        return
      }
    } else {
      next('/entrar')
      return
    }
  }
  next()
})

export default router
