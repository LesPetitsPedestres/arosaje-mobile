<template>
    <ion-page class="page">
      <div class="container">
        <div class="profil"></div>
        <ion-label class="title">Editer</ion-label>
        <div class="edit-fields">
          <ion-item color="light">
            <ion-input type="text" placeholder="James" class="custom"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input type="text" placeholder="Kirkup" class="custom"></ion-input>
          </ion-item>
          <ion-item color="light">
            <ion-input type="tel" placeholder="06 66 65 68 98" class="custom"></ion-input>
          </ion-item>
          <ion-item color="light">
            <ion-input type="adress" placeholder="47 rue des pédestre, Montpellier" class="custom"></ion-input>
          </ion-item>
          <ion-item color="light">
            <ion-input type="email" placeholder="james.kirkup@gmail.com" class="custom"></ion-input>
          </ion-item>
          <ion-item color="light">
            <ion-input type="password" placeholder="motdepasse" class="custom"></ion-input>
          </ion-item>
        </div>
        <div class="buttons">
          <ion-button  @click="$router.push('my-profil')" color="tertiary">Annuler</ion-button>
          <ion-button color="primary">Enregistrer</ion-button>
        </div>
      </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';

export default defineComponent({
  components: {
    IonPage
  },

  setup() {
    return {
    }
  }
 
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

.edit-fields {
  gap: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

ion-item {
  border-radius: 10px;
  --border-style: none;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.buttons #cancel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  background: #D9D9D9;
  border-radius: 10px;
  text-decoration: none;
  width: 132px;
  height: 47px;
}

</style>