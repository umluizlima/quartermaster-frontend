import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
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
      component: () => import('./views/Category.vue')
    },
    {
      path: '/itens',
      name: 'item',
      component: () => import('./views/Item.vue')
    },
    {
      path: '/terceiros',
      name: 'thirdparty',
      component: () => import('./views/Thirdparty.vue')
    },
    {
      path: '/usuarios',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '/emprestimos',
      name: 'lending',
      component: () => import('./views/Lending.vue')
    },
    {
      path: '/reservas',
      name: 'reservation',
      component: () => import('./views/Reservation.vue')
    }
  ]
})
