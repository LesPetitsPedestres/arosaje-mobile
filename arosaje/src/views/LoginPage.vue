<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-item color="secondary">
          <ion-icon :icon="mailOutline" slot="start"></ion-icon>
          <ion-input type="email" placeholder="Email" class="custom"></ion-input>
        </ion-item>
        <ion-item color="secondary">
          <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
          <ion-input type="password" placeholder="****" class="custom"></ion-input>
        </ion-item>

        <ion-button color="primary">Se connecter</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonIcon, IonButton } from '@ionic/vue';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';

export default defineComponent({
  setup() {
    return {
      mailOutline,
      lockClosedOutline
    }
  },

  components: {
    IonPage, IonContent, IonIcon, IonButton
  },
 
})
</script>

<style scoped>

.container {
  padding: 33px 20px;
  gap: 33;
}

ion-content {
  font-family: Nunito !important;
}

ion-item {
  border-radius: 10px;
}

ion-input .custom {
  --placeholder-opacity: .8;
  --padding-bottom: 17px;
  --padding-end: 15px;
  --padding-start: 15px;
  --padding-top: 17px;

}

ion-button {
  --border-radius: 10px;
  --padding-top: 20px;
  --padding-bottom: 20px;
  }
</style>
