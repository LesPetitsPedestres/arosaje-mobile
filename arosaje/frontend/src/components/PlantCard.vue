<template>
        <ion-card color="secondary" class="card-custom" @click="$router.push(`/${userID}/plant-details/${plant_id}`)">
          <div class="left">
            <img :src="plant_photo" alt="plante" class="plante-picture">
            <div class="content">
              <ion-card-header>
                <ion-card-title>{{ plant_name }}</ion-card-title>
                <ion-card-subtitle>{{ plant_adress }}</ion-card-subtitle>
              </ion-card-header>
            </div>
          </div>
          <ion-icon :icon="arrowForwardOutline" color="primary"></ion-icon>
        </ion-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, IonCardHeader, IonIcon, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import {arrowForwardOutline} from 'ionicons/icons';

export default defineComponent({
  props: {
    plant_name: String,
    plant_adress: String,
    plant_photo: String,
    plant_id: Number,
  },

  components: {
    IonCard, IonIcon, IonCardSubtitle, IonCardTitle, IonCardHeader
  },

  setup() {
    return {
      arrowForwardOutline,
    }
  },

  data() {
    return {
      userID : this.$route.params.userID,
    }
  }
 
})

</script>

<style scoped>
.card {
    text-decoration: none;
  }

  .card-custom {
    font-family: Nunito;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    height: 120px;
  }

  ion-card-title {
    font-size: 24px;
  }

  ion-icon {
    font-size: 40px;
    padding-right: 5px;
  }

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .plante-picture {
    width: 120px;
    height: 120px;
  }
</style>