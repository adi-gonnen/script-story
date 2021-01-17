import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cript from './views/Cript.vue'
import Icons from './views/Icons.vue'
import Simple from './views/Simple.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cript',
      name: 'cript',
      component: Cript
    },
    {
      path: '/icons',
      name: 'icons',
      component: Icons
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
  ]
})
