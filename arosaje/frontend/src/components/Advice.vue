<template>
    <div class="information-conseil">
        <div class="top">
            <div class="add-advice" v-if="botanist">
                <a href="/add-advice">
                    <ion-icon :icon="addOutline" color="primary"></ion-icon>
                </a>
            </div>
            <h4 class="info-title">Conseils</h4>
        </div>
        <div class="content-conseils" v-if="advice">
            <div class="conseil">
                <div class="middle">
                    <div class="top-name">
                        <h5 class="name">{{ botanist_firstname }} {{ botanist_name }}</h5>
                        <div v-if="botanist" class="edit_delete">
                            <a href="/edit-advice">
                                <ion-icon :icon="createOutline" color="primary"></ion-icon>
                            </a>
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
        <div class="content-no-conseils" v-else>
            <div class="no-conseil">
                <div class="middle">
                    <h5 class="no-advice">Aucun conseil n'a été trouvé</h5>
                </div>
            </div>
        </div>

        <ion-modal ref="modal" id="add-modal" :is-open="isOpen">
            <ion-content>
                <div class="wrapper">
                    <h1>Êtes vous sûr de vouloir supprimer votre commentaire ?</h1>
                </div>
                <div class="buttons">
                    <ion-button color="tertiary" id="cancel" @click="setOpen(false)">Annuler</ion-button>
                    <ion-button color="danger" id="create">Supprimer</ion-button>
                </div>
            </ion-content>
        </ion-modal>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonModal } from '@ionic/vue'
import { chevronDownOutline, chevronUpOutline, createOutline, addOutline,trashBinOutline } from 'ionicons/icons';

export default defineComponent({
    name: 'AdviceCard',
    props: {
        content: String,
        botanist_firstname: String,
        botanist_name: String,
        title: String,
    },

    data() {
        return {
            botanist: true, 

            showFullText: false,
            isOpen: false,
            advice: true,
        }
    },

    components: {
        IonModal,
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
    },
})
</script>

<style scoped>
.information-conseil {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
    gap: 22px;

    font-family: 'Nunito';
    font-style: normal;

    color: #395144;
    background: #FFFFFF;
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 1;
    z-index: 1;
    align-self: stretch;
}

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
    align-self: stretch;
    padding-right: 10px;
    padding-left: 10px;
}

.add-advice {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    align-self: stretch;
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

.info-title {
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    margin: 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.content-conseils, .content-no-conseils {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 17px;

    height: 392.67px;
    overflow-y: scroll;

    flex: none;
    order: 1;
    flex-grow: 0;
}

.content-no-conseils{
    height: auto;
}

.conseil, .no-conseil {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 15px;

    height: 187.83px;
    overflow-y: scroll;

    gap: 15px;
    border-bottom: 1px solid #395144;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.no-conseil {
    border: none;
    height: auto;
}

.middle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
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