<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-img :src="require('@/assets/images/Logo-sansfond.png')" alt="Logo Arosaje"></ion-img>
        <div class="title">
          <h2>S'inscrire</h2>
        </div>
        <div class="content">
          <ion-item color="secondary">
          <ion-icon :icon="personOutline" slot="start"></ion-icon>
          <ion-input type="email" placeholder="Nom Complet" class="custom"></ion-input>
        </ion-item>
        <ion-item color="secondary">
          <ion-icon :icon="mailOutline" slot="start"></ion-icon>
          <ion-input type="email" placeholder="Email" class="custom"></ion-input>
        </ion-item>
        <ion-item color="secondary">
          <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
          <ion-input type="password" placeholder="Mot de passe" class="custom"></ion-input>
        </ion-item>
        <ion-item color="secondary">
          <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
          <ion-input type="password" placeholder="Confirmer le mot de passe" class="custom"></ion-input>
        </ion-item>

        <div class="checkbox-group">
          <ion-label class="group-title">Vous êtes : </ion-label>
          <ion-item-group color="secondary">
            <ion-item class="option">
              <ion-checkbox slot="start" color="primary"></ion-checkbox>
              <ion-label class="checkbox-title">Propriétaire</ion-label>
            </ion-item>
            <ion-item class="option">
              <ion-checkbox slot="start" color="primary"></ion-checkbox>
              <ion-label class="checkbox-title">Gardien</ion-label>
            </ion-item>
            <ion-item class="option">
              <ion-checkbox slot="start" color="primary"></ion-checkbox>
              <ion-label class="checkbox-title">Botanise</ion-label>
            </ion-item>
          </ion-item-group>
        </div>

        <div class="bottom">
          <ion-button color="primary">S'inscrire</ion-button>

          <div class="link">
            <p color="primary">Vous avez déjà un compte ? <br>
              <a color="primary" href="">Se connecter</a> 
            </p>
          </div>
        </div>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonIcon, IonButton, IonImg, IonItemGroup, IonCheckbox } from '@ionic/vue';
import { lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';

export default defineComponent({
  setup() {
    return {
      mailOutline,
      lockClosedOutline,
      personOutline
    }
  },

  components: {
    IonPage, IonContent, IonIcon, IonButton, IonImg, IonItemGroup, IonCheckbox
  },
 
})
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 20px;
  gap: 12px;
}

ion-img {
  width: 270px;
}

.content {
  gap: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title, .link{
  gap: 5px;
}

h2 {
  font-family: Nunito;
  font-size: 40px;
  color: #395144;
}

ion-content {
  font-family: Nunito;
}

ion-item {
  font-family: Nunito;
  border-radius: 10px;
  font-size: 22px;
  --padding-bottom: 0px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 0px;
  --border-style: none;
  --min-height: 72px;
}

ion-input .custom {
  font-family: Nunito;
  --placeholder-opacity: .8;
}

ion-icon {
  font-size: 38px;
}

ion-item-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #395144;
  gap: 10px;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
}

.option {
  --padding-end : 0px;
  --padding-top: 0px;
  --padding-start: 0px;
  --min-height: 0px;
}

ion-checkbox {
  --size: 20px;
  margin-right: 4px;
}

ion-checkbox::part(container) {
    border-radius: 6px;
}

.group-title {
  font-size: 22px;
  color: #395144;
}

.checkbox-title {
  font-size: 15px;
  color: #395144;
}

ion-button {
  font-family: Nunito;
  --border-radius: 10px;
  --padding-top: 20px;
  --padding-bottom: 20px;
  font-size: 20px;
  }

  .link {
    display: flex;
    text-align: center;
    padding: 0px;
  }

  .bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
