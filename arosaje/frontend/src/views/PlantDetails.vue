<template>
    <ion-page class="page">
        <ion-header>
            <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button></ion-menu-button>
            </ion-buttons>

            <ion-title>{{ plant.name }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="picture" :style="{'background-image': 'url(data:image/png;base64,' + plant.photo_path + ')'}"></div>
            <div class="container">
                <div class="title">
                        <div class="edit" v-if="user.role == 'owner'">
                            <button class="button" @click="$router.push(`/${userID}/plant-details/${plant.ID}/edit-plant-details`)">
                                <ion-icon :icon="createOutline" color="primary"></ion-icon>
                            </button>
                        </div>
                    <h2>{{ plant.name }}</h2>
                    <div class="subtitle">
                        <h3>{{ plant.species }}</h3>
                        <h3>{{ plant.firstname }} {{ plant.owner_name}}</h3>
                        <h3>{{ plant.adress }}</h3>
                    </div>
                </div>

                <div class="information" v-if=" user.role === 'owner' || 'sitter'">
                    <h4 class="info-title">Demande</h4>
                    <p class="info-date">Du 10/02/2023 au 12/01/2023</p>
                </div>

                <div class="information-conseil" v-if="advices.length > 0">
                    <div class="top">
                        <div></div>
                        <h4 class="info-title">Conseils</h4>
                        <div class="add-advice" v-if="user.role == 'botanist'">
                            <button class="button" @click="$router.push(`/${userID}/${plantID}/add-advice`)">
                                <ion-icon :icon="addOutline" color="primary"></ion-icon>
                            </button>
                        </div>
                        <div v-else></div>
                    </div>
                    <div class="flex" v-for="advice in advices" :key="advice.ID">
                        <AdviceCard :title="advice.title" :botanist_firstname="advice.botanist_firstname" :botanist_name="advice.botanist_name" :content="advice
                        .content" :role="user.role" :advice_id="advice.ID"/>
                    </div>
                </div>

                <div class="information-conseil" v-else>
                    <div class="top">
                        <div></div>
                        <h4 class="info-title">Conseils</h4>
                        <div class="add-advice" v-if="user.role == 'botanist'">
                            <button class="button" @click="$router.push(`/${userID}/${plantID}/add-advice`)">
                                <ion-icon :icon="addOutline" color="primary"></ion-icon>
                            </button>
                        </div>
                        <div v-else></div>
                    </div>
                    <div class="content-no-conseils" >
                        <div class="no-conseil">
                            <div class="middle">
                                <h5 class="no-advice">Aucun conseil n'a été trouvé</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonIcon, IonContent, IonHeader, IonButtons, IonMenuButton, IonToolbar, IonTitle } from '@ionic/vue';
import { chevronDownOutline, chevronUpOutline, createOutline, addOutline } from 'ionicons/icons';
import AdviceCard from '../components/Advice.vue'

import axios from 'axios'

interface PlantResponse {
  ID: number;
  name: string;
  species: string;
  adress: string;
  owner_id: number;
  firstname: string;
  owner_name: string;
  photo_path: string;
}

interface AdvicesResponse {
  ID: number;
  title: string;
  botanist_name: string;
  botanist_firstname: string;
  content: string;
}

interface UserResponse {
  ID: number;
  role: string;
}

export default defineComponent({
    data() {
        return {
            plant: {} as PlantResponse,
            plantID: this.$route.params.plantID,
            advices: [] as  AdvicesResponse[],
            userID: this.$route.params.userID,
            user: {} as UserResponse,
        }
    },

    setup() {
        return {
            chevronDownOutline,
            chevronUpOutline,
            createOutline,
            addOutline
        }
    },

    components: {
        IonPage, IonIcon, IonContent, IonHeader, IonButtons, IonMenuButton, IonToolbar, IonTitle,
        AdviceCard, 
    },

    mounted() {
        axios.get(`http://localhost:3000/plant-details/${this.plantID}`)
        .then(response => {
            this.plant = response.data;
        })
        .catch(error => {
            console.error(error);
        });

        axios.get(`http://localhost:3000/advices/${this.plantID}`)
        .then(response => {
            this.advices = response.data;
        })
        .catch(error => {
            console.error(error);
        })

        axios.get(`http://localhost:3000/users/${this.userID}`)
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
}

.picture {
  width: 100%;
  height: 460px;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0px;
  top: 0px;
}

.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  padding: 0px;
  gap: 5px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 22px 60px;
    gap: 20px;
    align-self: stretch;

    background: #DFE8CC;
    box-shadow: 0px -4px 20px 9px rgba(0, 0, 0, 0.25);
    border-radius: 50px 50px 0px 0px;
    margin-top: 350px;
    width: 100%;

    order: 0;
    position: relative;
    z-index: 1;
}

.title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #395144;
    text-align: center;
    align-self: stretch;
}

.edit {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    align-self: stretch;
}

h2 {
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    margin-top: 0px;
}

h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.information {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px;
    gap: 10px;

    font-family: 'Nunito';
    font-style: normal;

    color: #395144;
    background: #FFFFFF;
    border-radius: 20px;

    /* Inside auto layout */

    order: 1;
    align-self: stretch;
}

ion-icon {
  font-size: 30px;
}

.info-title {
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    margin: 0px;
    order: 0;
    align-self: stretch;
}

.info-date {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    margin: 0px;
    order: 1;
    align-self: stretch;
}

.button {
    background-color: transparent;
}

.information-conseil {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px;
    gap: 10px;

    font-family: 'Nunito';
    font-style: normal;

    color: #395144;
    background: #FFFFFF;
    border-radius: 20px;

    /* Inside auto layout */

    align-self: stretch;
}


.content-no-conseils {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    height: auto;
    overflow-y: scroll;
}

.no-conseil {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
    border: none;
    height: auto;

    gap: 15px;
}

.middle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
}
.flex {
    display: flex;
    align-self: stretch;
}

</style>
