<template>
    <ion-page class="page">
        <div class="container">
            <!-- <div class="profil"></div> -->
            <ion-label class="title">Ajouter une plante</ion-label>
            <div class="center">
                <ion-list lines="none" class="add-fields">
                    <ion-item color="light">
                        <ion-icon :icon="imagesOutline" slot="start"></ion-icon>
                        <ion-input type="button" @click="capturePhoto" placeholder="Prendre une photo" class="custom"></ion-input>
                    </ion-item>
                    <img :src="imageData" v-if="imageData !== null">
                    <ion-item color="light">
                        <ion-icon :icon="personOutline" slot="start"></ion-icon>
                        <ion-input type="text" placeholder="Nom" class="custom"></ion-input>
                    </ion-item>
                    <ion-item color="light">
                        <ion-icon :icon="leafOutline" slot="start"></ion-icon>
                        <ion-input type="text" placeholder="Espèce" class="custom"></ion-input>
                        <!-- Espèce détecter par l'ia de la photo -->
                    </ion-item>
                    <ion-item color="light">
                        <ion-icon :icon="locationOutline" slot="start"></ion-icon>
                        <ion-input type="text" placeholder="Adresse" class="custom"></ion-input> 
                        <!-- Localisation automatique via la photo -->
                    </ion-item>
        
                    <ion-modal id="start-calendar" :keep-contents-mounted="true">
                        <ion-datetime id="start-datetime" color="primary" :show-default-buttons="true"
                        done-text="Valider"
                        cancel-text="Annuler">
                        <span slot="title">Date de début</span>
                        </ion-datetime>
                    </ion-modal>
                    <ion-modal id="end-calendar" :keep-contents-mounted="true">
                        <ion-datetime id="end-datetime" color="primary" :show-default-buttons="true"
                        done-text="Valider"
                        cancel-text="Annuler">
                        <span slot="title">Date de fin</span>
                        </ion-datetime>
                    </ion-modal>

                    <ion-item color="light">
                        <ion-icon :icon="calendarNumberOutline" slot="start"></ion-icon>
                        <ion-input type="text" class="custom"><ion-datetime-button datetime="start-datetime"></ion-datetime-button></ion-input>
                    </ion-item>
                    <ion-item color="light">
                        <ion-icon :icon="calendarNumberOutline" slot="start"></ion-icon>
                        <ion-input type="text" class="custom"><ion-datetime-button datetime="end-datetime"></ion-datetime-button></ion-input>
                    </ion-item>
                <!-- TODO Voir pour la sélection d'une range de date -->
                </ion-list>
                <div class="buttons">
                    <ion-button color="tertiary" id="cancel" @click="$router.push('my-profil')">Annuler</ion-button>
                    <ion-button color="primary" id="create">Créer</ion-button>
                </div>
            </div>
        </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonModal, IonList, IonButton, IonDatetime, IonDatetimeButton, } from '@ionic/vue';
import { locationOutline, personOutline, imagesOutline, calendarNumberOutline, leafOutline } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';

export default defineComponent({
  components: {
    IonPage, IonModal, IonList, IonButton, IonDatetime, IonDatetimeButton, 
  },

  setup() {
    return {
        locationOutline,
        personOutline,
        imagesOutline,
        calendarNumberOutline,
        leafOutline,
    }
  },

  data() {
    return {
        imageData: null as string | null, 
    }
  },

   methods: {
    async capturePhoto() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });
      this.imageData = image.dataUrl || null;
    },
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