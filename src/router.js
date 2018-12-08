import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        requiresAuth: true
      }
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
        requiresAuth: true,
        isAdmin: true
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
        guest: true
      }
    },
    {
      path: '/sair',
      name: 'logout',
      component: () => import('./views/Logout.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/conta',
      name: 'account',
      component: () => import('./views/Account.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/emprestar',
      name: 'lend',
      component: () => import('./views/Lend.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/devolver',
      name: 'return',
      component: () => import('./views/Return.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/reservar',
      name: 'reserve',
      component: () => import('./views/Reserve.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cadastrar-pessoa',
      name: 'NewPerson',
      component: () => import('./views/NewPerson.vue'),
      meta: {
        // requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({
        name: 'login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      if (to.matched.some(record => record.meta.isAdmin)) {
        if (store.getters.isAdmin) {
          next()
        } else {
          next({ name: 'home' })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
      next()
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

export default router
