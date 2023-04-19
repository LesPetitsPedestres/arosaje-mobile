<template>
  <a href="/plant_details" class="link-plant">
    <div class="plante">
      <div class="name">
        <ion-label color="primary" class="label">{{ plant_name }}</ion-label>
        <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { addOutline, arrowForwardOutline } from 'ionicons/icons';

export default defineComponent ({
    name: 'MyPlants',
    props: {
      plant_ID: {
        type: Number,
      },
      plant_name: {
        type: String,
      },
    },

    setup() {
        return {
            arrowForwardOutline,
            addOutline,
        }
    },
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
</style>
