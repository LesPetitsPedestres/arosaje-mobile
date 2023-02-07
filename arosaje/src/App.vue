<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
  @font-face {
    font-family: 'Nunito';
    src: url('./assets/fonts/Nunito-VariableFont_wght.ttf');
  }

  ion-app {
    font-family: Nunito !important;
  }
</style>
