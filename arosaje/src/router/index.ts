import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/login'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/login'
      },
      {
        path: 'login',
        component: () => import('@/views/LoginPage.vue')
      },
      {
        path: 'create',
        component: () => import('@/views/CreateProfil.vue')
      },
      {
        path: 'owner-profil',
        component: () => import('@/views/OwnerProfil.vue')
      },
      {
        path: 'owner-plants-list',
        component: () => import('@/views/OwnerPlantsList.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
