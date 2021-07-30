import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cript from './views/Cript.vue'
import Icons from './views/Icons.vue'
import Rules from './views/Rules.vue'
import Simple from './views/Simple.vue'
import Play from './views/Play.vue'

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
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
  ]
})
