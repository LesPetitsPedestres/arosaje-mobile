<template>
    <div class="information-photo">
        <div class="top">
          <ion-label class="label" color="primary">Mes plantes</ion-label>
          <a href="/add-plant">
            <ion-icon :icon="addOutline" color="primary"></ion-icon>
          </a>
        </div>
        <div class="plantes">
          <!-- Mettre un nombre max pour l'affichage -->
          <a href="/plant-details" class="link-plant">
            <div class="plante">
              <div class="name">
                <ion-label color="primary" class="label">{{ plant_name }}</ion-label>
                <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
              </div>
            </div>
          </a>
          <div class="plante">
            <div class="name">
              <ion-label color="primary" class="label">{{ plant_name }}</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
            </div>
          </div>
          <div class="plante">
            <div class="name">
              <ion-label color="primary" class="label">{{ plant_name }}</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
            </div>
          </div>
          <a class="see-more" href="/plants-list">
              <ion-label color="primary" class="label">Voir plus</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
          </a>
        </div>
      </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';
import { addOutline, arrowForwardOutline } from 'ionicons/icons';

export default {
    name: 'MyPlants',
    props: ['plant_name'],

    setup() {
        return {
            arrowForwardOutline,
            addOutline,
        }
    }
}

</script>

<style scoped>
 .information-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  gap: 15px;
  isolation: isolate;
  justify-content: flex-start;

  /* White */

  background: #FFFFFF;
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
}

.top{
  display: flex;
  justify-content: center;
  align-items: center;
}

.top ion-icon{
  position: absolute;
  left: 315px;
  top: 624px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
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
