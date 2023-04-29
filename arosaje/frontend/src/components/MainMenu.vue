<template>
    <ion-app>
        <ion-menu contentId="main-content" class="menu">
            <ion-header>
                <ion-toolbar>
                <ion-title>Menu Content</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">
              <ion-button class="custom" v-if="user.role == 'sitter'" @click="$router.push(`/${user.ID}/plants-list`)">
                <ion-icon :icon="leafOutline" slot="start" color="primary"></ion-icon>
                Liste des plantes disponible
              </ion-button>
              <ion-button class="custom" v-if="user.role == 'sitter'" @click="$router.push(`/${user.ID}/plants-list`)">
                <ion-icon :icon="timeOutline" slot="start" color="primary"></ion-icon>
                Liste de mes gardes
              </ion-button>
              <ion-button class="custom" v-if="user.role == 'owner'" @click="$router.push(`/${user.ID}/plants-list`)">
                <ion-icon :icon="leafOutline" slot="start" color="primary"></ion-icon>
                Liste de mes plantes
              </ion-button>
              <ion-button class="custom" v-if="user.role == 'botanist'" @click="$router.push(`/${user.ID}/plants-list`)">
                <ion-icon :icon="leafOutline" slot="start" color="primary"></ion-icon>
                Liste des plantes
              </ion-button>
              <ion-button class="custom" @click="$router.push(`/my-profil/${user.ID}`)">
                <ion-icon :icon="personOutline" slot="start" color="primary"></ion-icon>
                Profil
              </ion-button>
            </ion-content>
        </ion-menu>
        <div class="ion-page" id="main-content">
            <ion-header>
                <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
        </div>
    </ion-app>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {
      IonApp,
      IonContent,
      IonHeader,
      IonMenu,
      IonTitle,
      IonToolbar,
      IonButtons,
      IonMenuButton,
      IonButton, 
      IonIcon
  } from '@ionic/vue';
import { leafOutline, timeOutline, personOutline } from 'ionicons/icons';
import axios from 'axios'

interface UserResponse {
  ID: number;
  role: string;
}
  
export default defineComponent({
  name: 'MainMenu',

      components: {
        IonApp,
        IonContent,
        IonHeader,
        IonMenu,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonMenuButton,
        IonButton, 
        IonIcon
      },

      data() {
      return {
        user:{} as UserResponse,
      }
    },

      setup() {
        return {
          leafOutline,
          timeOutline,
          personOutline
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
      }
    });
  </script>
  
  <style scoped>
  .menu {
    z-index: 99;
    position: relative;
  }

  ion-button {
    --background: transparent;
  }

  .custom {
    color: #395144;
  }
  </style>