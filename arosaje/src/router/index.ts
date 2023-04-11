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
        path: ' ',
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
        path: 'my-profil',
        component: () => import('@/views/MyProfil.vue')
      },
      {
        path: 'edit-my-profil',
        component: () => import('@/views/EditMyProfil.vue')
      },
      {
        path: 'add-plant',
        component: () => import('@/views/AddPlant.vue')
      },
      {
        path: 'plants-list',
        component: () => import('@/views/PlantsList.vue')
      },
      {
        path: 'plant-details',
        component: () => import('@/views/PlantDetails.vue')
      },
      {
        path: 'edit-plant-details',
        component: () => import('@/views/EditPlantDetails.vue')
      },
      {
        path: 'add-advice',
        component: () => import('@/views/AddAdvice.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
