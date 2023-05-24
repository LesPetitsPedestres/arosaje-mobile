<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-img :src="require('@/assets/images/Logo-sansfond.png')" alt="Logo Arosaje"></ion-img>
        <div class="title">
          <h2>S'inscrire</h2>
        </div>
        <div class="content">
          <ion-item color="secondary">
          <ion-icon :icon="personOutline" slot="start"></ion-icon>
          <input v-model="name" type="text" placeholder="Nom Complet" class="custom">
        </ion-item>
        <ion-item color="secondary">
          <ion-icon :icon="mailOutline" slot="start"></ion-icon>
          <input v-model="email" type="email" placeholder="Email" class="custom">
        </ion-item>
        <ion-item color="secondary">
          <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
          <input v-model="pwd1" type="password" placeholder="Mot de passe" class="custom">
        </ion-item>
        <ion-item color="secondary">
          <ion-icon :icon="lockClosedOutline" slot="start"></ion-icon>
          <input v-model="pwd2" type="password" placeholder="Confirmer le mot de passe" class="custom">
        </ion-item>

        <div class="checkbox-group">
          <ion-label class="group-title">Vous êtes : </ion-label>
          <ion-item-group color="secondary">
            <ion-item class="option">
              <ion-checkbox v-model="propIsCheck" slot="start" color="primary"></ion-checkbox>
              <ion-label class="checkbox-title">Propriétaire</ion-label>
            </ion-item>
            <ion-item class="option">
              <ion-checkbox v-model="gardienIsCheck" slot="start" color="primary"></ion-checkbox>
              <ion-label class="checkbox-title">Gardien</ion-label>
            </ion-item>
            <ion-item class="option">
              <ion-checkbox v-model="botanistIsCheck" slot="start" color="primary"></ion-checkbox>
              <ion-label class="checkbox-title">Botanise</ion-label>
            </ion-item>
          </ion-item-group>
        </div>

        <div class="bottom">
          <ion-button @click="signUp()" color="primary">S'inscrire</ion-button>

          <div class="link">
            <p color="primary">Vous avez déjà un compte ? <br>
              <a color="primary" href="/login">Se connecter</a> 
            </p>
          </div>
        </div>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonIcon, IonButton, IonImg, IonItemGroup, IonCheckbox } from '@ionic/vue';
import { lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';
import { supabase } from "../supabase"
import axios from 'axios';



export default defineComponent({
  data() {
    return {
      name:'',
      email:'',
      pwd1:'',
      pwd2:'',
      gardienIsCheck: false,
      propIsCheck: false,
      botanistIsCheck: false,
    }
  },
  setup() {
    return {
      mailOutline,
      lockClosedOutline,
      personOutline
    }
  },

  components: {
    IonPage, IonContent, IonIcon, IonButton, IonImg, IonItemGroup, IonCheckbox
  },
  methods: {
  async signUp() {
    const response = await supabase.auth.signUp({
      email: this.email,
      password: this.pwd1,
    });
    if (response) {
      const role = []
      if (this.propIsCheck) {
        role.push('owner')
      }
      if (this.botanistIsCheck) {
        role.push('botanist')
      }
      if (this.gardienIsCheck) {
        role.push('sitter')
      }
      
      await axios.post(`http://localhost:3000/register`, {ID: response.data.user?.id, name : this.name, email: this.email, password: this.pwd1, role: role[0] })
          
    }
    
  },

 },
})
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 33px 20px;
  gap: 12px;
}

ion-img {
  width: 270px;
}

input{
  background: transparent;
  border: none;
  width: 100%;
}

input:focus {
  outline: none;
}

.content {
  gap: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title, .link{
  gap: 5px;
}

h2 {
  font-family: Nunito;
  font-size: 40px;
  color: #395144;
}

ion-content {
  font-family: Nunito;
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

input .custom {
  font-family: Nunito;
  --placeholder-opacity: .8;
}

ion-icon {
  font-size: 38px;
}

ion-item-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #395144;
  gap: 10px;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
}

.option {
  --padding-end : 0px;
  --padding-top: 0px;
  --padding-start: 0px;
  --min-height: 0px;
}

ion-checkbox {
  --size: 20px;
  margin-right: 4px;
}

ion-checkbox::part(container) {
    border-radius: 6px;
}

.group-title {
  font-size: 22px;
  color: #395144;
}

.checkbox-title {
  font-size: 15px;
  color: #395144;
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
