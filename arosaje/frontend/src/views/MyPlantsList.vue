<template>
  <!-- Liste des plantes pour le owner et sitter -->
    <ion-page class="page">
      <ion-header>
        <div class="head">
          <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title color="primary" v-if="user.role == 'owner'">Liste de mes plantes</ion-title>
            <ion-title color="primary" v-if="user.role == 'sitter'">Liste de mes gardes</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar color="secondary" show-clear-button="always" :animated="true" placeholder="Rechercher"></ion-searchbar>
          </ion-toolbar>
        </div>
      </ion-header>
      <div v-for="plante in plantes" :key="plante.ID">
        <PlantCard :plant_name="plante.name" :plant_adress="plante.address" :plant_photo="plante.photo_path" :plant_id="plante.ID" />
      </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton, } from '@ionic/vue'
import PlantCard from '../components/PlantCard.vue'

import axios from 'axios'

interface PlanteResponse {
  ID: number;
  name: string;
  species: string;
  address: string;
  photo_path: string;
}

interface UserResponse {
  ID: number;
  role: string;
}

export default defineComponent({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton,
    PlantCard,
  },

  data() {
    return {
      plantes:[] as PlanteResponse[],
      user:{} as UserResponse,
    };
  },

  mounted() {
    const userID = this.$route.params.userID;
    axios.get(`http://localhost:3000/plants/${userID}`)
      .then(response => {
        this.plantes = response.data;
      })
      .catch(error => {
        console.error(error);
      })

    axios.get(`http://localhost:3000/users/${userID}`)
      .then(response => {
        this.user = response.data;
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
  .head {
    gap: 10px;
  }

  ion-title {
    font-family: Nunito;
  }

  ion-icon {
    font-size: 40px;
    padding-right: 5px;
  }
</style>