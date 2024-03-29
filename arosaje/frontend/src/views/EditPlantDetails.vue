<template>
  <ion-page class="page">
    <ion-header>
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>

            <ion-title>Modifier {{ plant.name }}</ion-title>
            </ion-toolbar>
        </ion-header>
    <form @submit.prevent="updatePlant">
      <div class="picture" :style="{'background-image': 'url(data:image/png;base64,' + form.photo_path + ')'}" v-if="imageData == null"></div>
      <div class="picture" :style="{'background-image': 'url(data:image/png;base64,' + imageData + ')'}" v-if="imageData !== null"></div>
      <div class="container">
        <ion-label class="title">Editer</ion-label>
          <div class="edit-fields">
              <ion-item color="light">
                  <input type="text" class="custom" v-model="form.name" :placeholder="plant.name">
              </ion-item>
              <ion-item>
                  <input type="text" class="custom" v-model="form.address" :placeholder="plant.address">
              </ion-item>
              <ion-item color="light">
                <input type="text" :placeholder="result || 'Espèce'" v-model="form.species" class="custom">
                <ion-button @click="identifyPlant" class="button-ia"><ion-icon :icon="searchOutline"></ion-icon></ion-button>
              </ion-item>
              <ion-item color="light">
                <ion-icon :icon="imagesOutline" slot="start"></ion-icon>
                <input type="button" @click="capturePhoto" placeholder="Prendre une photo" class="custom">
              </ion-item>
          </div>
          <div class="buttons">
              <ion-button @click="$router.push(`/plant-details/${plantID}`)" color="tertiary">Annuler</ion-button>
              <ion-button type="submit" color="primary">Enregistrer</ion-button>
          </div>
      </div>
    </form>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import { imagesOutline, searchOutline } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

import axios from 'axios';

interface PlantResponse {
  ID: number;
  name: string;
  species: string;
  address: string;
  owner_id: number;
  firstname: string;
  owner_name: string;
  role: string;
}

export default defineComponent({
  components: {
    IonPage,
  },

  setup() {
    return {
      imagesOutline, searchOutline
    }
  },

  data() {
    return {
      plant: {} as PlantResponse,
      imageData: null as string | null, 
      result: null as string | null,
      form: {
        name: '',
        species: '',
        address: '',
        photo_path: null as string | null,
      },
      plantID: this.$route.params.plantID,
      userID: this.$route.params.userID,
    }
  },

  mounted() {
    axios.get(`http://localhost:3000/plant-details/${this.plantID}`)
      .then(response => {
        this.plant = response.data;
      })
      .catch(error => {
        console.error(error);
      });
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

    async updatePlant() {
      const { name, species, address, photo_path } = this.form;

      try {
        await axios.put(`http://localhost:3000/plant-details/${this.plantID}`, { name, species, address, photo_path }, {
          maxContentLength: 20000,
          maxBodyLength: 20000
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
  padding: 20px 22px 22px;
  gap: 20px;
  align-self: stretch;
  margin-top: 200px;

  background: #DFE8CC;
  box-shadow: 0px -4px 20px 9px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;

  width: 100%;
  height: 100%;

  position: relative;
  z-index: 1;
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

input{
  background: transparent;
  border: none;
  width: 100%;
}

input:focus {
  outline: none;
}

.picture {
  width: 100%;
  height: 460px;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0px;
  top: 0px;
}


</style>