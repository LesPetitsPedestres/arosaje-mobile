<template>
  <!-- Liste des plantes pour le owner et sitter -->
    <ion-page class="page">
      <ion-header>
        <div class="head">
          <ion-toolbar>
            <ion-title color="primary">Liste de mes plantes</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar color="secondary" show-clear-button="always" :animated="true" placeholder="Rechercher"></ion-searchbar>
          </ion-toolbar>
        </div>
      </ion-header>
      <div v-for="plante in plantes" :key="plante.ID">
        <PlantCard :plant_name="plante.name" :plant_adress="plante.address" :plant_photo="plante.photo" />
      </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar } from '@ionic/vue'
import PlantCard from '../components/PlantCard.vue'

import axios from 'axios'

interface PlanteResponse {
  ID: number;
  name: string;
  species: string;
  address: string;
  photo: string;
}

export default defineComponent({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar,
    PlantCard
  },

  data() {
    return {
      plantes:[] as PlanteResponse[],
    };
  },

  mounted() {
    axios.get('http://localhost:3000/plants')
      .then(response => {
        this.plantes = response.data;
      })
      .catch(error => {
        console.error(error);
      })
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

  .card {
    text-decoration: none;
  }

  .card-custom {
    font-family: Nunito;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    height: 120px;
  }

  ion-card-title {
    font-size: 24px;
  }

  ion-icon {
    font-size: 40px;
    padding-right: 5px;
  }

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .plante-picture {
    width: 120px;
    height: 120px;
  }
</style>