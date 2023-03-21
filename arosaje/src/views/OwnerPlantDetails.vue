<template>
    <ion-page class="page">
        <div class="container">
            <div class="title">
                <h2>Pétunia</h2>
                <div class="subtitle">
                    <h3>James Kirkup</h3>
                    <h3>Montpellier</h3>
                </div>
            </div>

            <div class="information">

            </div>

            <div class="information-conseil">

            </div>
        </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';

export default defineComponent({
    components: {
    IonPage
  },

    setup() {
        return {

        }
    },
})
</script>

<style scoped>
.page {
  overflow: scroll;
  background-color: #FFFFFF;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 22px 22px;
  gap: 20px;
  isolation: isolate;
  margin-top: 221px;

  /* Secondary */

  background: #DFE8CC;
  /* Shadow 1 */

  box-shadow: 0px -4px 20px 9px rgba(0, 0, 0, 0.25);
  border-radius: 50px 50px 0px 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}

.title {
    color: #395144;
    text-align: center;
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

.information, .information-conseil {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  gap: 15px;
  isolation: isolate;

  /* White */

  background: #FFFFFF;
  border-radius: 20px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
}
</style>
