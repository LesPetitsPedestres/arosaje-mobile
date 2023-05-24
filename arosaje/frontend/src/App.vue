<template>
  <ion-app>
    <ion-menu contentId="main" side="start">
      <!-- Ajouter les éléments de ton menu ici -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Arosaje</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item v-if="user.role == 'sitter'">
            <button class="custom-menu" @click="$router.push(`/${user.ID}/plants-list`)">
              <ion-icon :icon="leafOutline" slot="start" color="primary"></ion-icon>
              Liste des plantes disponible
            </button>
          </ion-item>
          <ion-item v-if="user.role == 'sitter'">
            <button class="custom-menu"  @click="$router.push(`/${user.ID}/my-plants-list`)">
              <ion-icon :icon="timeOutline" slot="start" color="primary"></ion-icon>
              Liste de mes gardes
            </button>
          </ion-item>

          <ion-item v-if="user.role == 'owner'">
            <button class="custom-menu" @click="$router.push(`/${user.ID}/my-plants-list`)">
              <ion-icon :icon="leafOutline" slot="start" color="primary"></ion-icon>
              Liste de mes plantes
            </button>
          </ion-item>
          
          <ion-item v-if="user.role == 'botanist'">
            <button class="custom-menu" @click="$router.push(`/${user.ID}/plants-list`)">
              <ion-icon :icon="leafOutline" slot="start" color="primary"></ion-icon>
              Liste des plantes
            </button>
          </ion-item>

          <ion-item>
            <button class="custom-menu" @click="$router.push(`/my-profil/${user.ID}`)">
              <ion-icon :icon="personOutline" slot="start" color="primary"></ion-icon>
              Profil
            </button>
          </ion-item>

        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonMenu, IonList, IonIcon, IonItem, IonToolbar, IonTitle, IonHeader, IonContent } from '@ionic/vue';
import { leafOutline, timeOutline, personOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios'

interface UserResponse {
  ID: string;
  role: string;
}

export default defineComponent ({
  setup() {
    return {
      leafOutline,
      timeOutline,
      personOutline
    }
  },

  components: {
    IonApp, IonRouterOutlet, IonMenu, IonList, IonIcon, IonItem, IonToolbar, IonTitle, IonHeader, IonContent
  },

  data() {
    return {
      user:{} as UserResponse,
    }
  },

  mounted() {
    if (this.$route.fullPath != '/login') {
      
      const userID = this.$route.params.userID;
      axios.get(`http://localhost:3000/users/${userID}`)
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
    
  }
})
</script>

<style>
  @font-face {
    font-family: 'Nunito';
    src: url('./assets/fonts/Nunito-VariableFont_wght.ttf');
  }

  @font-face {
    font-family: 'Dancing Script';
    src: url('./assets/fonts/DancingScript-VariableFont_wght.ttf');
  }

  ion-app {
    font-family: Nunito !important;
  }

  .ion-padding {
    display: flex;
    flex-direction: column;
  }
  
  .custom-menu {
    color: #395144;
    background: transparent;
  }
</style>
