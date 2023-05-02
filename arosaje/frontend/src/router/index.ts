import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/LoginPage.vue'
import CreateProfil from '../views/CreateProfil.vue'
import MyProfil from '../views/MyProfil.vue'
import EditMyProfil from '../views/EditMyProfil.vue'
import AddPlant from '../views/AddPlant.vue'
import MyPlantsList from '../views/MyPlantsList.vue'
import PlantsList from '../views/PlantsList.vue'
import PlantDetails from '../views/PlantDetails.vue'
import EditPlantDetails from '../views/EditPlantDetails.vue'
import AddAdvice from '../views/AddAdvice.vue'
import EditAdvice from '../views/EditAdvice.vue'
import TestSpecies from '../views/TestSpecies.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/create',
    component: CreateProfil,
  },
  {
    path: `/my-profil/:userID`,
    name: 'Profile',
    component: MyProfil,
  },
  {
    path: '/my-profil/:userID/edit-my-profil',
    component: EditMyProfil,
  },
  {
    path: '/:userID/add-plant',
    component: AddPlant,
  },
  {
    path: '/:userID/my-plants-list',
    component: MyPlantsList,
  },
  {
    path: '/:userID/plants-list',
    component: PlantsList,
  },
  {
    path: '/:userID/plant-details/:plantID',
    component: PlantDetails,
  },
  {
    path: '/:userID/plant-details/:plantID/edit-plant-details',
    component: EditPlantDetails,
  },
  {
    path: '/:userID/:plantID/add-advice',
    component: AddAdvice,
  },
  {
    path: '/:userID/:plantID/:adviceID/edit-advice',
    component: EditAdvice,
  },
  {
    path: '/test-species',
    component: TestSpecies,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
