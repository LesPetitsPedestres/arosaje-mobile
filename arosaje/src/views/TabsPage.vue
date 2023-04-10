<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="login" href="/tabs/login">
          <ion-icon :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="create" href="/tabs/create">
          <ion-icon :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="my-profil" href="/tabs/my-profil">
          <ion-icon :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonTabBar,
    IonTabButton, 
    IonTabs, 
    IonLabel, 
    IonIcon, 
    IonPage, 
    IonRouterOutlet
  },

  setup() {
    return {
      ellipse, 
      square, 
      triangle
    }
  }
 
})
</script>
