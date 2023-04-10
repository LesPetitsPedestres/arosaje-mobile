<template>
  <ion-page class="page">

    <div class="container">
      <div class="profil"></div>
      <ion-label class="title">James Kirkup</ion-label>

      <div class="information">
        <div class="edit">
          <a href="/tabs/edit-my-profil">
            <ion-icon :icon="createOutline" color="primary"></ion-icon>
          </a>
        </div>

        <ion-item-group>
          <ion-item>
            <ion-icon :icon="callOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">06 66 66 66 66</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="locationOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">6 rue des pedestre</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="mailOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">james.kirkup@gmail.com</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="lockClosedOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">********</ion-label>
          </ion-item>
        </ion-item-group>
      </div>

      <div class="information-photo">
        <div class="top">
          <ion-label class="label" color="primary">Mes plantes</ion-label>
          <a href="/tabs/add-plant">
            <ion-icon :icon="addOutline" color="primary"></ion-icon>
          </a>
        </div>
        <div class="plantes">
          <!-- Mettre un nombre max pour l'affichage -->
          <a href="/tabs/plant-details" class="link-plant">
            <div class="plante">
              <div class="name">
                <ion-label color="primary" class="label">Pétunia</ion-label>
                <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
              </div>
            </div>
          </a>
          <div class="plante">
            <div class="name">
              <ion-label color="primary" class="label">Pétunia</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
            </div>
          </div>
          <div class="plante">
            <div class="name">
              <ion-label color="primary" class="label">Pétunia</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
            </div>
          </div>
          <a class="see-more" href="/tabs/plants-list">
              <ion-label color="primary" class="label">Voir plus</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonIcon, IonItem, IonItemGroup, IonLabel, } from '@ionic/vue';
import { callOutline, locationOutline, mailOutline, lockClosedOutline, arrowForwardOutline, createOutline, addOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonPage, IonIcon, IonItem, IonItemGroup, IonLabel, 
  },

  setup() {
    return {
      callOutline,
      locationOutline,
      mailOutline, 
      lockClosedOutline,
      arrowForwardOutline,
      createOutline, 
      addOutline, 
    }
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
  padding: 112px 22px 22px;
  gap: 20px;
  isolation: isolate;
  margin-top: 221px;

  /* Secondary */

  background: #DFE8CC;
  /* Shadow 1 */

  box-shadow: 0px -4px 20px 9px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.profil {
  box-sizing: border-box;

  position: absolute;
  width: 184px;
  height: 184px;
  left: 100px;
  top: 100px;

  background-image: url("../assets/images/fondplante.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* Primary */

  border: 10px solid #395144;
  border-radius: 50%;
  box-shadow: 0px 15px 27px 1px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
  z-index: 3;
}

.title {
  font-size: 32px;
  color: #395144;
}

.information, .information-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  gap: 15px;
  isolation: isolate;

  /* White */

  background: #FFFFFF;
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
}

.edit ion-icon {
  position: absolute;
  left: 315px;
  top: 411px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
}
.information-photo {
  justify-content: flex-start;
}

.top{
  display: flex;
  justify-content: center;
  align-items: center;
}

.top ion-icon{
  position: absolute;
  left: 315px;
  top: 711px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
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

.plante {
  background-image: url("../assets/images/Plante.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  width: 243px;
  height: 319px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

.link-plant {
  text-decoration: none;
}

.name, .see-more{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 28px;
  gap: 59px;
  width: 100%;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 20px;
}

.see-more {
  width: 243px;
  height: 97px;
  align-items: center;
  background: #DFE8CC;
  backdrop-filter: none;
  text-decoration: none;
  font-size: 12px;
}
</style>
