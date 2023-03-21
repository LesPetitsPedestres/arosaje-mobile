<template>
    <ion-page class="page">
      <ion-header>
        <div class="head">
          <ion-toolbar>
            <ion-title color="primary">Liste de mes plantes</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar color="secondary" show-clear-button="always" animated="true" placeholder="Rechercher"></ion-searchbar>
          </ion-toolbar>
        </div>
      </ion-header>

      <a href="" class="card">
        <ion-card color="secondary" class="card-custom">
          <div class="left">
            <img src="../assets/images/Plante.jpg" alt="plante" class="plante-picture">
            <div class="content">
              <ion-card-header>
                <ion-card-title>Pétunia</ion-card-title>
                <ion-card-subtitle>Montpellier</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                James Kirkup
              </ion-card-content>
            </div>
          </div>

          <ion-icon :icon="arrowForwardOutline" color="primary"></ion-icon>
        </ion-card>
      </a>

      <a href="" class="card">
        <ion-card color="secondary" class="card-custom">
          <div class="left">
            <img src="../assets/images/Plante.jpg" alt="plante" class="plante-picture">
            <div class="content">
              <ion-card-header>
                <ion-card-title>Pétunia</ion-card-title>
                <ion-card-subtitle>Montpellier</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                James Kirkup
              </ion-card-content>
            </div>
          </div>

          <ion-icon :icon="arrowForwardOutline" color="primary"></ion-icon>
        </ion-card>
      </a>

      <a href="" class="card">
        <ion-card color="secondary" class="card-custom">
          <div class="left">
            <img src="../assets/images/Plante.jpg" alt="plante" class="plante-picture">
            <div class="content">
              <ion-card-header>
                <ion-card-title>Pétunia</ion-card-title>
                <ion-card-subtitle>Montpellier</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                James Kirkup
              </ion-card-content>
            </div>
          </div>

          <ion-icon :icon="arrowForwardOutline" color="primary"></ion-icon>
        </ion-card>
      </a>

      <a href="" class="card">
        <ion-card color="secondary" class="card-custom">
          <div class="left">
            <img src="../assets/images/Plante.jpg" alt="plante" class="plante-picture">
            <div class="content">
              <ion-card-header>
                <ion-card-title>Pétunia</ion-card-title>
                <ion-card-subtitle>Montpellier</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                James Kirkup
              </ion-card-content>
            </div>
          </div>

          <ion-icon :icon="arrowForwardOutline" color="primary"></ion-icon>
        </ion-card>
      </a>

      <a href="" class="card">
        <ion-card color="secondary" class="card-custom">
          <div class="left">
            <img src="../assets/images/Plante.jpg" alt="plante" class="plante-picture">
            <div class="content">
              <ion-card-header>
                <ion-card-title>Pétunia</ion-card-title>
                <ion-card-subtitle>Montpellier</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                James Kirkup
              </ion-card-content>
            </div>
          </div>

          <ion-icon :icon="arrowForwardOutline" color="primary"></ion-icon>
        </ion-card>
      </a>

      <a href="" class="card">
        <ion-card color="secondary" class="card-custom">
          <div class="left">
            <img src="../assets/images/Plante.jpg" alt="plante" class="plante-picture">
            <div class="content">
              <ion-card-header>
                <ion-card-title>Pétunia</ion-card-title>
                <ion-card-subtitle>Montpellier</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                James Kirkup
              </ion-card-content>
            </div>
          </div>

          <ion-icon :icon="arrowForwardOutline" color="primary"></ion-icon>
        </ion-card>
      </a>

    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import {arrowForwardOutline} from 'ionicons/icons';

export default defineComponent({
  components: {
    IonPage
  },

  setup() {
    return {
      arrowForwardOutline,
    }
  }
 
})
</script>

<style scoped>
.page {
  overflow: scroll;
  background-color: #FFFFFF;
}
  .head {
    gap: 10px;
  }
  ion-title {
    font-family: Nunito;
  }

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