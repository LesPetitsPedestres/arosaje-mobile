<template>
    <!-- Liste des plantes pour le owner et sitter -->
      <ion-page class="page">
        <ion-header>
          <div class="head">
            <ion-toolbar>
              <ion-buttons slot="start">
                  <ion-menu-button></ion-menu-button>
              </ion-buttons>
              <ion-title color="primary">Liste des plantes</ion-title>
            </ion-toolbar>
            <ion-toolbar>
              <ion-searchbar color="secondary" show-clear-button="always" :animated="true" placeholder="Rechercher"></ion-searchbar>
            </ion-toolbar>
            <ion-toolbar>
              <ion-segment v-model="currentContent" @ionChange="changeContent">
                <ion-segment-button value="list">
                  <ion-icon :icon="listOutline"></ion-icon>
                </ion-segment-button>
                <ion-segment-button value="map">
                  <ion-icon :icon="mapOutline"></ion-icon>
                </ion-segment-button>
              </ion-segment>
            </ion-toolbar>
          </div>
        </ion-header>
        <div v-if="currentContent === 'list'">
          <div v-for="plante in plantes" :key="plante.ID">
            <PlantCard :plant_name="plante.name" :plant_adress="plante.address" :plant_photo="plante.photo_path" :plant_id="plante.ID"/>
          </div>
        </div>
        <div v-else-if="currentContent === 'map'">
        </div>

      </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonIcon } from '@ionic/vue'
  import { mapOutline,listOutline } from 'ionicons/icons';
  import PlantCard from '../components/PlantCard.vue';
  
  import axios from 'axios'
  
  interface PlanteResponse {
    ID: number;
    name: string;
    species: string;
    address: string;
    photo_path: string;
  }
  
  export default defineComponent({
    components: {
      IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonButtons, IonMenuButton, IonSegment, IonSegmentButton, IonIcon,
      PlantCard,
    },

    setup() {
      return {
        mapOutline, listOutline 
      }
    },
  
    data() {
      return {
        plantes:[] as PlanteResponse[],
        currentContent: 'list',
      };
    },

    methods: {
      changeContent() {
        console.log('Segment changed:', this.currentContent)
      },
    },
  
    mounted() {
      axios.get(`http://localhost:3000/plants`)
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
    
  ion-icon {
    font-size: 40px;
    padding-right: 5px;
  }
  </style>