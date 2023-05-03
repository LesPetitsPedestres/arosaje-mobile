<template>
  <ion-page class="page">
    <ion-header>
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>

            <ion-title>Mon profil</ion-title>
            </ion-toolbar>
        </ion-header>
      <div class="container">
        <div class="profil"></div>
        <ion-label class="title">{{ user.firstname }} {{ user.name }}</ion-label>

        <div class="information">
          <div class="edit">
            <button class="button" @click="$router.push(`/my-profil/${user.ID}/edit-my-profil`)">
                <ion-icon :icon="createOutline" color="primary"></ion-icon>
            </button>
          </div>
          <div class="items">
            <ion-item>
              <ion-icon :icon="callOutline" slot="start" color="primary"></ion-icon>
              <ion-label class="label" color="primary">{{ user.phone }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="mailOutline" slot="start" color="primary"></ion-icon>
              <ion-label class="label" color="primary">{{ user.email }}</ion-label>
            </ion-item>
            <ion-item>
              <ion-icon :icon="lockClosedOutline" slot="start" color="primary"></ion-icon>
              <ion-label class="label" color="primary">{{ user.password }}</ion-label>
            </ion-item>
          </div>
        </div>

        <div class="information-photo">
          <div class="top" v-if="user.role === 'owner'">
            <div></div>
            <ion-label class="label" color="primary" >Mes plantes</ion-label>
            <button class="button" @click="$router.push(`/${user.ID}/add-plant`)">
              <ion-icon :icon="addOutline" color="primary"></ion-icon>
            </button>
          </div>
          <div class="top" v-if="user.role === 'sitter'">
            <div></div>
            <ion-label class="label" color="primary" >Mes gardes</ion-label>
            <div></div>
          </div>
          <div class="top" v-if="user.role === 'botanist'">
            <div></div>
            <ion-label class="label" color="primary" >Mes conseils</ion-label>
            <div></div>
          </div>
          <div class="plantes">
            <div v-for="plant in plants" :key="plant.ID">
              <MyPlants :plant_id="plant.ID" :plant_name="plant.name" :user_id="user.ID" :photo_path="plant.photo_path
              "/>
            </div>
            <button v-if="user.role == 'owner' || user.role == 'sitter'" class="see-more" color="secondary" @click="$router.push(`/${user.ID}/my-plants-list`)">
              Voir plus
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
          </button>
          <button v-if="user.role == 'botanist'" class="see-more" color="secondary" @click="$router.push(`/${user.ID}/plants-list`)">
              Voir plus
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
          </button>
          </div>
        </div>
      </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonIcon, IonItem, IonLabel, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, } from '@ionic/vue';
import { callOutline, mailOutline, lockClosedOutline, arrowForwardOutline, createOutline, addOutline } from 'ionicons/icons';
import MyPlants from '../components/MyPlants.vue';

import axios from 'axios'

interface UserResponse {
  ID: number;
  name: string;
  firstname: string;
  phone: string;
  email: string;
  password: string;
  role: string;
}

interface PlantsResponse {
  ID: number;
  name: string;
  owner_id: number;
  photo_path: string;
}

export default defineComponent({

  data() {
    return {
      user:{} as UserResponse,
      plants: [] as PlantsResponse[],
    }
  }, 

  components: {
    IonPage, IonIcon, IonItem, IonLabel, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle,
    MyPlants,
  },

  setup() {
    return {
      callOutline,
      mailOutline, 
      lockClosedOutline,
      arrowForwardOutline,
      createOutline, 
      addOutline, 
    }
  }, 

  mounted() {
    const userID = this.$route.params.userID;
    axios.get(`http://localhost:3000/users/${userID}`)
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`http://localhost:3000/plants/${userID}`)
      .then(response => {
        this.plants = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },

})
</script>

<style scoped>
.page {
  overflow: scroll;
  background-color: #FFFFFF;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 22px 22px;
  gap: 20px;
  margin-top: 221px;

  /* Secondary */

  background: #DFE8CC;
  /* Shadow 1 */

  box-shadow: 0px -4px 20px 9px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;

  /* Inside auto layout */
  order: 0;
}

.profil {
  box-sizing: border-box;
  margin-top: -100px;

  width: 184px;
  height: 184px;

  background-image: url("../assets/images/fondplante.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* Primary */

  border: 10px solid #395144;
  border-radius: 50%;
  box-shadow: 0px 15px 27px 1px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  order: 0;
}

.title {
  font-size: 32px;
  color: #395144;
}

.information, .information-photo {
  display: flex;
  flex-direction: column;
  padding: 22px;
  gap: 15px;

  /* White */

  background: #FFFFFF;
  border-radius: 20px;

  /* Inside auto layout */

  align-self: stretch;
  order: 1;
}

.information {
  gap: 0px;
}

.items{
  display: flex;
  flex-direction: column;
}

.edit {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

ion-item {
  --border-style: none;
  --background: none;
  --padding-start: 0px;
  --padding-end: 0px;
}

.label {
  font-size: 20px;
}

ion-icon {
  font-size: 30px;
}

.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  padding: 0px;
  gap: 5px;
}

.plantes {
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 292px;
  height: 319px;  
  border-radius: 20px;
  gap: 18px;
}

.see-more{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 22px 28px;
  width: 100%;
  font-size: 16px;

  background: #DFE8CC;
  color: #395144;
  backdrop-filter: blur(5px);
  border-radius: 20px;
  backdrop-filter: none;
  text-decoration: none;
}

.button {
  background-color: transparent;
}
</style>
