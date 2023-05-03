<template>
    <ion-page class="page">
      <ion-header>
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>

            <ion-title>Modifier mon profil</ion-title>
            </ion-toolbar>
        </ion-header>
      <div class="container">
        <div class="profil"></div>
        <ion-label class="title">Editer</ion-label>
        <form @submit.prevent="updateProfil">
          <div class="edit-fields">
            <ion-item color="light">
              <input type="text" v-model="form.name" :placeholder="user.name" class="custom">
            </ion-item>
            <ion-item>
              <input type="text" v-model="form.firstname" :placeholder="user.firstname" class="custom">
            </ion-item>
            <ion-item color="light">
              <input type="tel" v-model="form.phone" :placeholder="user.phone" class="custom">
            </ion-item>
            <ion-item color="light">
              <input type="email" v-model="form.email" :placeholder="user.email" class="custom">
            </ion-item>
            <ion-item color="light">
              <input type="password" v-model="form.password" :placeholder="user.password" class="custom">
            </ion-item>
          </div>
          <div class="buttons">
            <ion-button  @click="$router.push(`/my-profil/${user.ID}`)" color="tertiary">Annuler</ion-button>
            <ion-button type="submit" color="primary">Enregistrer</ion-button>
          </div>
        </form>
      </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonButton, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, } from '@ionic/vue';

import axios from 'axios'

interface UserResponse {
  ID: number;
  name: string;
  firstname: string;
  phone: string;
  email: string;
  password: string;
}

export default defineComponent({
  components: {
    IonPage, IonButton, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
  },

  data() {
    return {
      user: {} as UserResponse,
      form: {
        name: '',
        firstname: '',
        phone: '',
        email: '',
        password: '',
      },
      userID: this.$route.params.userID
    }
  },

  mounted() {
    axios.get(`http://localhost:3000/users/${this.userID}`)
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },

  methods: {
    async updateProfil() {
      const { name, firstname, phone, email, password } = this.form;
 
      try {
        await axios.put(`http://localhost:3000/users/${this.userID}`, { name, firstname, phone, email, password }, {
          maxContentLength: 20000,
          maxBodyLength: 20000
        });
        this.$router.push(`/my-profil/${this.userID}`);
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
  padding: 0px 22px 22px;
  gap: 20px;
  align-self: stretch;
  margin-top: 220px;

  background: #DFE8CC;
  width: 100%;
  height: 844px;
  /* Shadow 1 */

  box-shadow: 0px -4px 20px 9px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;

  /* Inside auto layout */
  order: 0;
}

.profil {
  box-sizing: border-box;

  margin-top: -100px;
  width: 184px;
  height: 184px;

  background-image: url("../assets/images/fondplante.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* Primary */

  border: 10px solid #395144;
  border-radius: 50%;
  box-shadow: 0px 15px 27px 1px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  order: 0;
}

.title {
  font-size: 32px;
  color: #395144;
}

form{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit-fields {
  gap: 20px;
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
  margin-top: 10px;
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
}

input:focus {
  outline: none;
}


</style>