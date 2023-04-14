<template>
    <ion-app>
        <ion-menu contentId="main-content" class="menu">
            <ion-header>
                <ion-toolbar>
                <ion-title>Menu Content</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">This is the menu content.</ion-content>
        </ion-menu>
        <div class="ion-page" id="main-content">
            <ion-header>
                <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
        </div>
    </ion-app>
  </template>
  
  <script lang="ts">
    import {
      IonContent,
      IonHeader,
      IonMenu,
      IonTitle,
      IonToolbar
    } from '@ionic/vue';
  
    export default {
      name: 'MainMenu',

      components: {
        IonContent,
        IonHeader,
        IonMenu,
        IonTitle,
        IonToolbar
      },
    };
  </script>
  
  <style scoped>
    /* ion-menu::part(backdrop) {
      background-color: rgba(255, 0, 255, 0.5);
    }
  
    ion-menu::part(container) {
      border-radius: 0 20px 20px 0;
  
      box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
    } */
  .menu {
    z-index: 99;
  }
  </style>