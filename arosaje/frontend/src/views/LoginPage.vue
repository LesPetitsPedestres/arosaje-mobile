<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-img :src="require('@/assets/images/Logo-sansfond.png')" alt="Logo Arosaje"></ion-img>
        <div class="title">
          <h1>Bienvenue !</h1>
          <h2>Se connecter</h2>
        </div>
        <form @submit.prevent="login">
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
      // userID: null
    }
  }, 

  components: {
    IonPage, IonContent, IonIcon, IonButton, IonImg 
  },

  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          email: this.email,
          password: this.password,
          // id: this.userID
         }, { withCredentials: true });

         const userID = response.data.id;
         localStorage.setItem('userID', userID)

         this.$router.push(`/my-profil/${userID}`)

      } catch (error) {
        console.error(error);
      }
    },
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
  --min-height: 72px;
}

ion-input .custom {
  font-family: Nunito;
  --placeholder-opacity: .8;

}

ion-button {
  font-family: Nunito;
  --border-radius: 10px;
  --padding-top: 20px;
  --padding-bottom: 20px;
  font-size: 20px;
  }

  .link {
    display: flex;
    text-align: center;
    padding: 0px;
  }

  .bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
