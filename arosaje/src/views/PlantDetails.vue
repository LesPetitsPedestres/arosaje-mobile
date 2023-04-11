<template>
    <ion-page class="page">
        <div class="picture">
            <img src="../assets/images/Plante.jpg" alt="">
        </div>
        <div class="container">
            <div class="title">
                    <div class="edit">
                        <a href="/tabs/edit-plant-details">
                            <ion-icon :icon="createOutline" color="primary"></ion-icon>
                        </a>
                    </div>
                <h2>{{ plant_name }}</h2>
                <div class="subtitle">
                    <h3>{{ species }}</h3>
                    <h3>{{ user_firstname }} {{ user_name}}</h3>
                    <h3>{{ plant_adress }}</h3>
                </div>
            </div>

            <div class="information" v-if="owner || sitter">
                <h4 class="info-title">Demande</h4>
                <p class="info-date">Du 10/02/2023 au 12/01/2023</p>
            </div>
            <AdviceCard text="Lorem, ipsum dolor sit amet consectetur adipisi  Ipsam odit optio deleniti voluptatem. Rerum at, dolor laudantium non fugit, odit ad laborum, ullam dolore cupiditate itaque. Nulla ducimus sapiente earum."/>
        </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import { chevronDownOutline, chevronUpOutline, createOutline } from 'ionicons/icons';
import AdviceCard from '../components/Advice.vue'

export default defineComponent({
    data() {
        return {
            owner: true,
            sitter: false,
            botanist: false,

            plant_name: "Pétunia", 
            species: "Cactus",
            user_name: "Kirkup",
            user_firstname: "James",
            plant_adress: "Montpellier",

            advice_content: "Lorem, ipsum dolor sit amet consectetur adipisi  Ipsam odit optio deleniti voluptatem. Rerum at, dolor laudantium non fugit, odit ad laborum, ullam dolore cupiditate itaque. Nulla ducimus sapiente earum.",
        }
    },

    setup() {
        return {
            chevronDownOutline,
            chevronUpOutline,
            createOutline
        }
    },

    components: {
        IonPage,
        AdviceCard
    },
})
</script>

<style scoped>
.page {
  overflow: scroll;
}

.picture {
    background-color: #FFFFFF;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 22px 22px;
    gap: 20px;
    align-self: stretch;
    isolation: isolate;

    background: #DFE8CC;
    box-shadow: 0px -4px 20px 9px rgba(0, 0, 0, 0.25);
    border-radius: 50px 50px 0px 0px;
    position: absolute;
    left: 0px;
    top: 350px;
    width: 100%;

    flex: none;
    order: 1;
    flex-grow: 0;
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
    flex-grow: 0;
    z-index: 1;
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
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.info-date {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    margin: 0px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
</style>
