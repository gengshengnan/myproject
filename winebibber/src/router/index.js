import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Kinds from '@/components/Kinds'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import Sales from '@/components/Sales'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/kinds',
      name: 'Kinds',
      component: Kinds
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/sales',
      name: 'Sales',
      component: Sales
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
