<template>
    <ion-page class="page">
      <ion-header>
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>

            <ion-title>Ajouter une plante</ion-title>
            </ion-toolbar>
        </ion-header>
        <div class="container">
            <!-- <div class="profil"></div> -->
            <ion-label class="title">Ajouter une plante</ion-label>
            <div class="center">
              <form @submit.prevent="addPlant">
                <ion-list lines="none" class="add-fields">
                    <div class="picture" :style="{'background-image': 'url(data:image/png;base64,' + form.photo_path + ')'}" v-if="imageData == null"></div>
                    <div class="picture" :style="{'background-image': 'url(data:image/png;base64,' + imageData + ')'}" v-if="imageData !== null"></div>
                    <ion-item color="light">
                        <ion-icon :icon="leafOutline" slot="start"></ion-icon>
                        <input type="text" placeholder="Nom de la plante" class="custom" v-model="form.name">
                    </ion-item>
                    <ion-item color="light">
                      <ion-icon :icon="imagesOutline" slot="start"></ion-icon>
                      <input type="button" @click="capturePhoto" placeholder="Prendre une photo" class="custom">
                    </ion-item>
                    <ion-item color="light">
                        <ion-icon :icon="leafOutline" slot="start"></ion-icon>
                        <input type="text" :placeholder="result || 'Espèce'" v-model="form.species" class="custom">
                        <ion-button @click="identifyPlant" class="button-ia"><ion-icon :icon="searchOutline"></ion-icon></ion-button>
                        <!-- Espèce détecter par l'ia de la photo -->
                    </ion-item>
                    <ion-item color="light">
                        <ion-icon :icon="locationOutline" slot="start"></ion-icon>
                        <input type="text" placeholder="Adresse" v-model="form.address" class="custom">
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
                    <ion-button color="tertiary" id="cancel" @click="$router.push(`/my-profil/${userID}`)">Annuler</ion-button>
                    <ion-button type="submit" color="primary" id="create">Créer</ion-button>
                </div>
              </form>
            </div>
        </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonModal, IonList, IonButton, IonDatetime, IonDatetimeButton, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonItem, IonIcon, IonInput, IonLabel } from '@ionic/vue';
import { locationOutline, imagesOutline, calendarNumberOutline, leafOutline, searchOutline } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

import axios from 'axios';

export default defineComponent({
  components: {
    IonPage, IonModal, IonList, IonButton, IonDatetime, IonDatetimeButton, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonItem, IonIcon, IonInput, IonLabel
  },

  setup() {
    return {
        locationOutline,
        imagesOutline,
        calendarNumberOutline,
        leafOutline,
        searchOutline,
    }
  },

  data() {
    return {
      imageData: null as string | null, 
      result: null as string | null,
      form: {
        name: '',
        species: '',
        address: '',
        photo_path: null as string | null,
      },
      userID: this.$route.params.userID,
      speciesID: '',
    }
  },

  methods: {
    async capturePhoto() {
      const position = await Geolocation.getCurrentPosition();
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.imageData = image.base64String || null;
      this.form.photo_path = this.imageData;

      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBfqAMKCMdaV9KQnsM-8uKlguTH-36cyDg`);
      const address = response.data.results[0].formatted_address;

    // Enregistrer l'adresse dans le formulaire
      this.form.address = address;
    },

    async identifyPlant() {
      const apiUrl = 'https://plant.id/api/v2/identify';

      const data = {
        api_key: "fQGtzQOtwBggm1K6U7agoOmU4JYWDYzqOdVCokKmszjKRBU7OY",
        images: [this.imageData],
        /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
        plant_details: ["common_names",
            "url",
            "name_authority",
            "wiki_description",
            "taxonomy",
            "synonyms"],
      };

      axios.post(apiUrl, data)
        .then(res => {
          console.log(res.data);
          const suggestions = res.data.suggestions;
          if (suggestions.length > 0) {
            const plantName = suggestions[0].plant_name;
            console.log(`Plant name: ${plantName}`);
            this.result = plantName;
          } else {
            console.log('No plant suggestions found');
          }
        }).catch(error => {
          console.error(error);
        })        
    },

    async addPlant() {
      const { name, species, address, photo_path } = this.form;
      const ownerID = this.$route.params.userID;

      try {
        await axios.post(`http://localhost:3000/plant-details/${ownerID}`, { name, species, address, photo_path, ownerID: ownerID }, {
          maxContentLength: 20000,
          maxBodyLength: 20000
        });
        // this.$router.push(`${this.userID}/plant-details/${this.plantID}`);
        // Rediriger vers la liste des plantes du propriétaire
      } catch (error) {
        console.error(error);
      }
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

.picture {
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: cover;
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

input{
  background: transparent;
  border: none;
  width: 100%;
}

input:focus {
  outline: none;
}

ion-button {
  --background: #ffffff;
  --padding-top: 10px;
  --padding-bottom: 10px;
  --border-radius: 10px;
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