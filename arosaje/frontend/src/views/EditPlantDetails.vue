<template>
  <ion-page class="page">
    <form @submit.prevent="updatePlant">
      <div class="picture">
        <ion-item color="light">
            <ion-icon :icon="imagesOutline" slot="start"></ion-icon>
            <ion-input type="button" @click="capturePhoto" placeholder="Prendre une photo" class="custom"></ion-input>
        </ion-item>
        <img src="{{ photo_path }}" alt="" v-if="imageData == null">
        <img :src="imageData" v-if="imageData !== null">
      </div>
      <div class="container">
        <ion-label class="title">Editer</ion-label>
          <div class="edit-fields">
              <ion-item color="light">
                  <ion-input type="text" :clear-input="true" class="custom" v-model="name" :placeholder="name"></ion-input>
              </ion-item>
              <ion-item>
                  <ion-input type="text" class="custom" v-model="address" :placeholder="address"></ion-input>
              </ion-item>
              <ion-item color="light">
                  <ion-input type="text" class="custom" v-model="species" :placeholder="species"></ion-input>
              </ion-item>
          </div>
          <div class="buttons">
              <ion-button  @click="$router.push('/plant-details/:plantID')" color="tertiary">Annuler</ion-button>
              <ion-button type="submit" color="primary">Enregistrer</ion-button>
          </div>
      </div>
    </form>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import { imagesOutline } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';

import axios from 'axios';

export default defineComponent({
  components: {
    IonPage
  },

  setup() {
    return {
        imagesOutline
    }
  },

  data() {
    return {
        imageData: null as string | null, 
        photo_path: "../assets/images/Plante.jpg",
        name: '',
        address: '',
        species: '',
        plantID: this.$route.params.plantID
    }
  },

  mounted() {
    axios.get(`http://localhost:3000/plant-details/${this.plantID}`)
      .then(response => {
        const plant = response.data;
        this.name = plant.name;
        this.address = plant.address;
        this.species = plant.species;
        this.photo_path = plant.photo_path;
      })
      .catch(error => {
        console.error(error);
      })
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

    updatePlant() {
      axios.put(`http://localhost:3000/plant-details/${this.plantID}`, {
        name: this.name,
        address: this.address,
        species: this.species,
        photo_path: this.photo_path
      })
      .then(response => {
          console.log(response.data);
        })
      .catch(error => {
        console.error(error);
      })
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
    padding: 20px 22px 22px;
    gap: 20px;
    align-self: stretch;
    isolation: isolate;
    margin-top: 200px;

    background: #DFE8CC;
    box-shadow: 0px -4px 20px 9px rgba(0, 0, 0, 0.25);
    border-radius: 50px 50px 0px 0px;

    width: 100%;
    height: 100%;

    flex: none;
    order: 1;
    flex-grow: 0;
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