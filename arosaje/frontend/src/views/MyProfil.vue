<template>
  <ion-page class="page">
    <div class="container">
      <MainMenu/>
      <div class="profil"></div>
      <ion-label class="title">{{ user.firstname }} {{ user.name }}</ion-label>

      <div class="information">
        <div class="edit">
          <a href="/my-profil/edit-my-profil">
            <ion-icon :icon="createOutline" color="primary"></ion-icon>
          </a>
        </div>

        <ion-item-group>
          <ion-item>
            <ion-icon :icon="callOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">{{ user.phone }}</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="mailOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">{{ user.email }}</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="lockClosedOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">{{ user.password }}</ion-label>
          </ion-item>
        </ion-item-group>
      </div>

      <MyPlants plant_name="Pétunia" v-if="user.role === 'owner'"/>
      <MyGardes plant_name="Pétunia" v-if="user.role === 'sitter' "/>
      <MyAdvices plant_name="Pétunia" v-if="user.role === 'botanist' "/>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonIcon, IonItem, IonItemGroup, IonLabel, } from '@ionic/vue';
import { callOutline, mailOutline, lockClosedOutline, arrowForwardOutline, createOutline, addOutline } from 'ionicons/icons';
import MyPlants from '../components/MyPlants.vue';
import MyGardes from '../components/MyGardes.vue';
import MyAdvices from '../components/MyAdvices.vue';
import MainMenu from '../components/MainMenu.vue';

import axios from 'axios'

interface UserResponse {
  ID : string;
  name: string;
  firstname: string;
  phone: string;
  email: string;
  password: string;
  role: string;
}

export default defineComponent({

  data() {
    return {
      user:{} as UserResponse,
    }
  }, 

  components: {
    IonPage, IonIcon, IonItem, IonItemGroup, IonLabel, 
    MyPlants, MyGardes, MyAdvices, MainMenu
  },

  setup() {
    return {
      callOutline,
      mailOutline, 
      lockClosedOutline,
      arrowForwardOutline,
      createOutline, 
      addOutline, 
    }
  }, 

  mounted() {
    const userID = this.$route.params.userID;
    // console.log(userID, "id du user")
    axios.get(`http://localhost:3000/users/${userID}`)
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.error(error);
      })
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
  padding: 112px 22px 22px;
  gap: 20px;
  isolation: isolate;
  margin-top: 221px;

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

.profil {
  box-sizing: border-box;

  position: absolute;
  width: 184px;
  height: 184px;
  left: 100px;
  top: 100px;

  background-image: url("../assets/images/fondplante.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* Primary */

  border: 10px solid #395144;
  border-radius: 50%;
  box-shadow: 0px 15px 27px 1px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
  z-index: 1;
}

.title {
  font-size: 32px;
  color: #395144;
}

.information {
  display: flex;
  flex-direction: column;
  padding: 22px;
  gap: 15px;
  isolation: isolate;

  /* White */

  background: #FFFFFF;
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  align-self: stretch;
  order: 1;
  flex-grow: 0;
  z-index: 1;
}

.edit ion-icon {
  position: absolute;
  left: 315px;
  top: 411px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
}

ion-item {
  --border-style: none;
  --background: none;
  --padding-start: 0px;
  --padding-end: 0px;
}

.label {
  font-size: 20px;
}

ion-icon {
  font-size: 30px;
}
</style>
