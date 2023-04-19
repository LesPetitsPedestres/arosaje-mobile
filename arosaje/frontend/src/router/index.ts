import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import LoginPage from '../views/LoginPage.vue'
import CreateProfil from '../views/CreateProfil.vue'
import MyProfil from '../views/MyProfil.vue'
import EditMyProfil from '../views/EditMyProfil.vue'
import AddPlant from '../views/AddPlant.vue'
import PlantsList from '../views/PlantsList.vue'
import PlantDetails from '../views/PlantDetails.vue'
import EditPlantDetails from '../views/EditPlantDetails.vue'
import AddAdvice from '../views/AddAdvice.vue'

// AJOUTER UN GARDE ROUTE : 
// beforeEnter: (to, from, next) => {
//       if (user.role === 'propriétaire') {
//         next();
//       } else {
//         next('/page-non-autorisee');
//       }
//     }
//   },

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
    component: MyProfil,
  },
  {
    path: '/my-profil/:userID/edit-my-profil',
    component: EditMyProfil,
  },
  {
    path: '/add-plant',
    component: AddPlant,
  },
  {
    path: '/plants-list',
    component: PlantsList,
  },
  {
    path: '/plant-details/:plantID',
    component: PlantDetails,
  },
  {
    path: '/plant-details/edit-plant-details',
    component: EditPlantDetails,
  },
  {
    path: '/add-advice',
    component: AddAdvice,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
