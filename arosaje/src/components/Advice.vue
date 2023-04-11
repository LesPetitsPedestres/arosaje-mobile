<template>
                <div class="information-conseil">
                <h4 class="info-title">Conseils</h4>
                <div class="content-conseils">
                    <div class="conseil">
                        <div class="middle">
                            <h5 class="name">Bill Trémondus</h5>
                            <h6 class="title-conseil">Titre</h6>
                            <p class="text-conseil">{{ displayText }}</p>
                        </div>
                        <button class="button" @click="showFullText = true" v-if="!showFullText">
                            <ion-icon :icon="chevronDownOutline" color="primary"></ion-icon>
                        </button>
                        <button class="button" @click="showFullText = false" v-if="showFullText">
                            <ion-icon :icon="chevronUpOutline" color="primary"></ion-icon>
                        </button>
                    </div>

                    <div class="conseil">
                        <div class="middle">
                            <h5 class="name">Frédéric Pastis</h5>
                            <h6 class="title-conseil">Titre</h6>
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
            </div>
</template>

<script lang="ts">
import { chevronDownOutline, chevronUpOutline, createOutline } from 'ionicons/icons';


export default {
    name: 'AdviceCard',
    props: ['text'],

    data() {
        return {
            showFullText: false
        }
    },

    setup() {
        return {
            chevronDownOutline,
            chevronUpOutline,
            createOutline
        }
    },

  computed: {
    displayText() {
      if (this.showFullText) {
        return this.text;
      } else {
        return this.text.slice(0, 50) + "...";
      }
    }
  },

//   displayText() {
//       if (this.showFullText) {
//         return this.text;
//       } else {
//         return this.text.slice(0, 50) + "...";
//       }
//     },
}
</script>

<style scoped>
.information, .information-conseil {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
    gap: 10px;

    font-family: 'Nunito';
    font-style: normal;

    color: #395144;
    background: #FFFFFF;
    border-radius: 20px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 1;
    z-index: 1;
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

.content-conseils {
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
.conseil {
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
</style>