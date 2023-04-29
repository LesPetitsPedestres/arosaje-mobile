<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-img :src="require('@/assets/images/Logo-sansfond.png')" alt="Logo Arosaje"></ion-img>
        <div class="title">
          <h1>Bienvenue !</h1>
          <h2>Se connecter</h2>
        </div>
        <form @submit.prevent="login()">
          <div class="center">
            <ion-item color="secondary">
              <ion-icon :icon="mailOutline" slot="start"></ion-icon>
              <input type="email" placeholder="Email" class="custom" v-model="email">
            </ion-item>
            <ion-item color="secondary">
              <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
              <input type="password" placeholder="********" class="custom" v-model="password">
            </ion-item>
          
            <div class="bottom">
              <ion-button type="submit" color="primary">Se connecter</ion-button>

              <div class="link">
                <p color="primary">Vous n'avez pas de compte ? <br>
                  <a color="primary" href="/create">Créer un compte</a> 
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonIcon, IonButton, IonImg } from '@ionic/vue';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';

import axios from 'axios'

export default defineComponent({
  setup() {
    return {
      mailOutline,
      lockClosedOutline
    }
  },

  data() {
    return {
      email: '',
      password: '',
    }
  }, 

  components: {
    IonPage, IonContent, IonIcon, IonButton, IonImg 
  },

  methods: {
    async login() {
      axios.post('http://localhost:3000/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log(response.data); // affiche l'ID utilisateur renvoyé par le serveur
        this.$router.push(`/my-profil/${response.data.ID}`)
      })
      .catch(error => {
        console.error(error.response.data); // affiche l'erreur renvoyée par le serveur
      });
    }
  }
 
})
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 20px;
  gap: 25px;
}

.center {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title, .link{
  gap: 5px;
}

h1 {
  font-family: Dancing Script;
  font-size: 55px;
  color: #395144;
}

h2 {
  font-family: Nunito;
  font-size: 40px;
  color: #395144;
}

ion-content {
  font-family: Nunito;
}

ion-icon {
  font-size: 38px;
}

ion-item {
  font-family: Nunito;
  border-radius: 10px;
  font-size: 22px;
  --padding-bottom: 0px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 0px;
  --border-style: none;
  --min-height: 64px;
}

ion-input .custom {
  font-family: Nunito;
  --placeholder-opacity: .8;

}

input{
  background: transparent;
  border: none;
}

input:focus {
  outline: none;
}


ion-button {
  font-family: Nunito;
  --border-radius: 10px;
  --padding-top: 20px;
  --padding-bottom: 20px;
  font-size: 18px;
}

  .link {
    text-align: center;
    padding: 0px;
  }

  .bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 50px;
    margin-left: 50px;
  }
</style>
