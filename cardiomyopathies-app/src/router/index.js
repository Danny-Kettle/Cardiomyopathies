import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news.vue')
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../components/login/Reset.vue')
    },
    {
      path: '/HPO',
      name: 'HPO',
      component: () => import('../views/HPO.vue')
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: () => import('../views/FAQ.vue')
    }
  ]
})

export default router
