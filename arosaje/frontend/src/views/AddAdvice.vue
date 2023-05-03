<template>
    <ion-page class="page">
      <ion-header>
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>

            <ion-title>Ajouter un conseil</ion-title>
            </ion-toolbar>
        </ion-header>
        <div class="container">
            <ion-label class="title">Ajouter un conseil</ion-label>
            <div class="center">
              <form @submit.prevent="addAdvice">
                <ion-list lines="none" class="add-fields">
                    <ion-item color="light">
                        <ion-icon :icon="bulbOutline" slot="start"></ion-icon>
                        <input type="text" placeholder="Titre" class="custom" v-model="form.title">
                    </ion-item>
                    <ion-item color="light">
                        <ion-icon :icon="textOutline" slot="start"></ion-icon>
                        <textarea :auto-grow="true" type="text" placeholder="Ecrivez votre conseil" class="custom" v-model="form.content"></textarea>
                    </ion-item>  
                </ion-list>
                <div class="buttons">
                    <ion-button color="tertiary" id="cancel" @click="$router.push(`/${userID}/plant-details/${plantID}`)">Annuler</ion-button>
                    <ion-button type="submit" color="primary" id="create">Ajouter</ion-button>
                </div>
              </form>
            </div>
        </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonList, IonButton, IonIcon, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, } from '@ionic/vue';
import { textOutline, bulbOutline } from 'ionicons/icons';

import axios from 'axios';

export default defineComponent({
  components: {
    IonPage, IonList, IonButton, IonItem, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  },

  setup() {
    return {
        textOutline,
        bulbOutline
    }
  },

  data() {
    return {
      form: {
        title: '',
        content: '',
      },
      userID: this.$route.params.userID,
      plantID: this.$route.params.plantID
    }
  },

  methods: {
    async addAdvice() {
      const { title, content } = this.form;
      const botanistID = this.$route.params.userID;
      const plantID = this.$route.params.plantID;

      try {
        await axios.post(`http://localhost:3000/advices/${botanistID}/${plantID}`, { title, content, botanistID: botanistID, plantID: plantID }, {
        });
        this.$router.push(`${this.userID}/plant-details/${this.plantID}`);
      } catch (error) {
        console.error(error);
      }
    },
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

input, textarea{
  background: transparent;
  border: none;
  width: 100%;
}

input:focus {
  outline: none;
}


</style>