import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: () => import('../views/WorkoutsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/friend',
      name: 'friend',
      component: () => import('../views/FriendactivityView.vue')
    },
    {
      path: '/pastworkouts',
      name: 'pastworkouts',
      component: () => import('../views/WorkoutsView.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../views/WorkoutsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/food',
      name: 'food',
      component: () => import('../views/FoodView.vue')
    },
    {
      path: '/fluid',
      name: 'fluid',
      component: () => import('../views/FluidsView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AddUserView.vue')
    },
  ]
})
export default router;
