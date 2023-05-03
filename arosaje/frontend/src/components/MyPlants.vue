<template>
  <router-link :to="{ path: `/${user_id}/plant-details/${plant_id}`}" class="link-plant">
    <div class="plante" :style="{ backgroundImage: `url(${photo_path})` }">
      <div class="name">
        <ion-label color="primary" class="label">{{ plant_name }}</ion-label>
        <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { addOutline, arrowForwardOutline } from 'ionicons/icons';
import { IonLabel, IonIcon } from '@ionic/vue';

export default defineComponent ({
    name: 'MyPlants',
    props: {
      plant_id: {
        type: Number,
      },
      plant_name: {
        type: String,
      },
      user_id: {
        type: Number,
      },
      photo_path: {
        type: String,
      },
    },

    setup() {
        return {
            arrowForwardOutline,
            addOutline,
        }
    },

    components: {
      IonLabel, IonIcon
    }
})

</script>

<style scoped>
.label {
  font-size: 20px;
}

ion-icon {
  font-size: 30px;
}

.plante {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 243px;
  height: 319px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

img {
  height: 319px;
  width: 243px;

  object-fit: cover;
}

.link-plant {
  text-decoration: none;
}

.name {
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
</style>
