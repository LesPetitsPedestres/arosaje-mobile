<template>
    <ion-page class="page">
        <div class="container">
            <ion-label class="title">Ajouter un conseil</ion-label>
            <div class="center">
                <ion-list lines="none" class="add-fields">
                    <ion-item color="light">
                        <ion-icon :icon="bulbOutline" slot="start"></ion-icon>
                        <ion-input type="text" placeholder="Titre" class="custom"></ion-input>
                    </ion-item>
                    <ion-item color="light">
                        <ion-icon :icon="textOutline" slot="start"></ion-icon>
                        <ion-textarea :auto-grow="true" type="text" placeholder="Ecrivez votre conseil" class="custom"></ion-textarea>
                    </ion-item>  
                </ion-list>
                <div class="buttons">
                    <ion-button color="tertiary" id="cancel" @click="$router.push('plant-details')">Annuler</ion-button>
                    <ion-button color="primary" id="create">Ajouter</ion-button>
                </div>
            </div>
        </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonList, IonButton } from '@ionic/vue';
import {  textOutline, bulbOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonPage, IonList, IonButton, 
  },

  setup() {
    return {
        textOutline,
        bulbOutline
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
  padding: 22px 22px 22px;
  gap: 20px;
  isolation: isolate;
  margin-top: 200px;
  align-self: stretch;
  height: 100%;

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

.title {
  font-size: 32px;
  color: #395144;
}

.center {
  gap: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.add-fields {
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: none;
}

ion-item {
  font-family: Nunito;
  border-radius: 10px;
  font-size: 16px;
  --padding-bottom: 0px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 0px;
  --border-style: none;
  --min-height: 60px;
  
  width: 100%;
}

ion-icon {
    font-size: 30px;
    color: #395144;
}

ion-input .custom {
  font-family: Nunito;
  --placeholder-opacity: .8;
  --background: #FFFFFF;
  color: #395144;
}

ion-datetime {
  --background: #ffffff;
  color: #4B4B4B;
  border-radius: 16px;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
}

.buttons #cancel, .buttons #create {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 25px;
    border-radius: 10px;
    text-decoration: none;
}

.buttons #cancel {
  background: #D9D9D9;
}

.buttons #create {
    background: #395144;
}

</style>