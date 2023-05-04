<template>
    <div class="flex">
        <div class="content-conseils">
            <div class="conseil">
                <div class="middle">
                    <div class="top-name">
                        <h5 class="name">{{ botanist_firstname }} {{ botanist_name }}</h5>
                        <div v-if="role == 'botanist'" class="edit_delete">
                            <button class="button" @click="$router.push(`/${userID}/${plantID}/${advice_id}/edit-advice`)">
                                <ion-icon :icon="createOutline" color="primary"></ion-icon>
                            </button>
                            <a class="button"  @click="setOpen(true)">
                                <ion-icon :icon="trashBinOutline" color="primary"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <h6 class="title-conseil">{{ title }}</h6>
                    <p class="text-conseil">{{ displayText }}</p>
                </div>
                <button class="button" @click="showFullText = true" v-if="!showFullText">
                    <ion-icon :icon="chevronDownOutline" color="primary"></ion-icon>
                </button>
                <button class="button" @click="showFullText = false" v-if="showFullText">
                    <ion-icon :icon="chevronUpOutline" color="primary"></ion-icon>
                </button>
            </div>
        </div>

        <ion-modal ref="modal" id="add-modal" :is-open="isOpen">
            <ion-content>
                <div class="wrapper">
                    <h1>Êtes vous sûr de vouloir supprimer votre commentaire ?</h1>
                </div>
                <div class="buttons">
                    <ion-button color="tertiary" id="cancel" @click="setOpen(false)">Annuler</ion-button>
                    <ion-button color="danger" id="create" @click="deleteAdvice()">Supprimer</ion-button>
                </div>
            </ion-content>
        </ion-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonModal, IonIcon, IonButton, IonContent, } from '@ionic/vue'
import { chevronDownOutline, chevronUpOutline, createOutline, addOutline,trashBinOutline } from 'ionicons/icons';

import axios from 'axios';

export default defineComponent({
    name: 'AdviceCard',
    props: {
        content: String,
        botanist_firstname: String,
        botanist_name: String,
        title: String,
        role: String,
        advice_id: Number,
    },

    data() {
        return {
            showFullText: false,
            isOpen: false,
            userID: this.$route.params.userID,
            plantID: this.$route.params.plantID,
        }
    },

    components: {
        IonModal, IonIcon, IonButton, IonContent,
    },

    setup() {
        return {
            chevronDownOutline,
            chevronUpOutline,
            createOutline,
            addOutline,
            trashBinOutline
        }
    },

  computed: {
    displayText() {
      if (this.showFullText) {
        return this.content;
      } else {
        if(this.content !== undefined) {
            return this.content.slice(0, 50) + "...";
        } else {
            return " ";
        }
      }
    }
  },

  methods: {
        setOpen(isOpen: boolean) {
            this.isOpen = isOpen;
        },

        async deleteAdvice() {
            axios.delete(`http://localhost:3000/advices/${this.advice_id}`)
                .then(response => {
                // La plante a été supprimée avec succès, tu peux faire une action ici si besoin
                console.log(response.data.message);
                })
                .catch(error => {
                // Une erreur est survenue, tu peux afficher un message d'erreur ou faire une action ici si besoin
                console.error(error.message);
            });
        }
    },
})
</script>

<style scoped>
.flex {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    margin: 0px;
}

.edit_delete {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    align-self: stretch;
    gap: 5px;
}

.edit_delete ion-icon {
    font-size: 25px;
}

.top-name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: stretch;
}

.content-conseils{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 17px;

    height: auto;
    overflow-y: scroll;
    align-self: stretch;
}

.conseil {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    height: auto;
    overflow-y: scroll;
    align-self: stretch;

    gap: 15px;
    border-bottom: 1px solid #395144;
}

.middle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    order: 0;
    align-self: stretch;
}

.name {
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    margin-top: 5px;
}

.title-conseil {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    text-decoration-line: underline;
    margin: 0px;
}

.text-conseil {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    margin: 0px;
}

.button {
    background-color: transparent;
}

ion-icon {
    font-size: 30px;
}

ion-modal#add-modal {
    --height: 35%;
    --border-radius: 20px;
    --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --margin: 5px
  }

  ion-modal::part(backdrop) {
    background: rgb(167, 168, 170);
    opacity: 1;
  }

  ion-modal#add-modal .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 22px;
    gap: 15px;
  }

  ion-modal#add-modal h1{
    color: #395144;
    font-family: Nunito;
    text-align: center;
    font-size: 32px;
  }

  .buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
}

ion-modal#add-modal ion-button#cancel { 
  color: #4B4B4B;
  font-family: Nunito;
  --border-radius: 10px;
  --padding-top: 20px;
  --padding-bottom: 20px;
  font-size: 20px;
}

ion-modal#add-modal ion-button#create { 
  font-family: Nunito;
  --border-radius: 10px;
  --padding-top: 20px;
  --padding-bottom: 20px;
  font-size: 20px;
}
</style>