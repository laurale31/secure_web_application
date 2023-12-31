import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    // Add the route to Menu Page
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/Menu.vue')

    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')

    }
  ]
})

export default router
