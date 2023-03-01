<template>
  <ion-page class="page">

    <div class="container">
      <div class="profil"></div>
      <ion-label class="title">James Kirkup</ion-label>

      <div class="information">
        <div class="edit">
          <a href="tabs/owner-edit-profil">
            <ion-icon :icon="createOutline" color="primary"></ion-icon>
          </a>
        </div>

        <ion-item-group>
          <ion-item>
            <ion-icon :icon="callOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">06 66 66 66 66</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="locationOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">6 rue des pedestre</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="mailOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">james.kirkup@gmail.com</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="lockClosedOutline" slot="start" color="primary"></ion-icon>
            <ion-label class="label" color="primary">********</ion-label>
          </ion-item>
        </ion-item-group>
      </div>

      <div class="information-photo">
        <div class="top">
          <ion-label class="label" color="primary">Mes plantes</ion-label>
          <a id="open-modal">
            <ion-icon :icon="addOutline" color="primary"></ion-icon>
          </a>
        </div>

        <ion-modal id="add-modal" ref="modal" trigger="open-modal">
          <div class="wrapper">
            <h1>Ajouter une plante</h1>

            <ion-list lines="none">
              <ion-item color="secondary">
                <ion-icon :icon="personOutline" slot="start"></ion-icon>
                <ion-input type="text" placeholder="Nom" class="custom"></ion-input>
              </ion-item>
              <ion-item color="secondary">
                <ion-icon :icon="imagesOutline" slot="start"></ion-icon>
                <ion-input type="text" placeholder="Ajouter une ou des photo(s)" class="custom"></ion-input>
              </ion-item>
              <ion-item color="secondary">
                <ion-icon :icon="locationOutline" slot="start"></ion-icon>
                <ion-input type="text" placeholder="Adresse" class="custom"></ion-input>
              </ion-item>
  
              <ion-modal id="calendar" :keep-contents-mounted="true">
                <ion-datetime id="datetime" color="primary" :show-default-buttons="true"
                done-text="Valider"
                cancel-text="Annuler"
                ></ion-datetime>
              </ion-modal>
              <ion-item color="secondary">
                <ion-icon :icon="calendarNumberOutline" slot="start"></ion-icon>
                <ion-input type="text" class="custom"><ion-datetime-button datetime="datetime"></ion-datetime-button></ion-input>
              </ion-item>
              <!-- TODO Voir pour la sélection d'une range de date -->
            </ion-list>
            <div class="buttons">
                <ion-button color="tertiary" id="cancel">Annuler</ion-button>
                <ion-button color="primary" id="create">Créer</ion-button>
            </div>
          </div>
            
        </ion-modal>
       
        <div class="plantes">
          <!-- Mettre un nombre max pour l'affichage -->
          <div class="plante">
            <div class="name">
              <ion-label color="primary" class="label">Pétunia</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
            </div>
          </div>
          <div class="plante">
            <div class="name">
              <ion-label color="primary" class="label">Pétunia</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
            </div>
          </div>
          <div class="plante">
            <div class="name">
              <ion-label color="primary" class="label">Pétunia</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
            </div>
          </div>
          <a class="see-more" href="tabs/owner-plants-list">
              <ion-label color="primary" class="label">Voir plus</ion-label>
              <ion-icon :icon="arrowForwardOutline" slot="end" color="primary"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonIcon, IonItem, IonItemGroup, IonLabel, IonModal, IonList, IonButton, IonDatetime, IonDatetimeButton, } from '@ionic/vue';
import { callOutline, locationOutline, mailOutline, lockClosedOutline, arrowForwardOutline, createOutline, addOutline, personOutline, imagesOutline, calendarNumberOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonPage, IonIcon, IonItem, IonItemGroup, IonLabel, IonModal, IonList, IonButton, IonDatetime, IonDatetimeButton,
  },

  setup() {
    return {
      callOutline,
      locationOutline,
      mailOutline, 
      lockClosedOutline,
      arrowForwardOutline,
      createOutline, 
      addOutline, 
      personOutline,
      imagesOutline,
      calendarNumberOutline 
    }
  }
 
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
  padding: 112px 22px 22px;
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

.profil {
  box-sizing: border-box;

  position: absolute;
  width: 184px;
  height: 184px;
  left: 100px;
  top: 100px;

  background-image: url("../assets/images/fondplante.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* Primary */

  border: 10px solid #395144;
  border-radius: 50%;
  box-shadow: 0px 15px 27px 1px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
  z-index: 3;
}

.title {
  font-size: 32px;
  color: #395144;
}

.information, .information-photo {
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

.edit ion-icon {
  position: absolute;
  left: 315px;
  top: 411px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
}
.information-photo {
  justify-content: flex-start;
}

.top{
  display: flex;
  justify-content: center;
  align-items: center;
}

.top ion-icon{
  position: absolute;
  left: 315px;
  top: 711px;
  flex: none;
  order: 1;
  flex-grow: 0;
  z-index: 1;
}

ion-item {
  --border-style: none;
  --background: none;
  --padding-start: 0px;
  --padding-end: 0px;
}

.label {
  font-size: 20px;
}

ion-icon {
  font-size: 30px;
}

.plantes {
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 292px;
  height: 319px;  
  border-radius: 20px;
  gap: 18px;
}

.plante {
  background-image: url("../assets/images/Plante.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  width: 243px;
  height: 319px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

.name, .see-more{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 28px;
  gap: 59px;
  width: 100%;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 20px;
}

.see-more {
  width: 243px;
  height: 97px;
  align-items: center;
  background: #DFE8CC;
  backdrop-filter: none;
  text-decoration: none;
  font-size: 12px;
}

ion-modal#add-modal {
    --width: fit-content;
    --min-width: 417px;
    --height: fit-content;
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

  ion-modal#add-modal ion-icon {
  font-size: 38px;
}

ion-modal#add-modal ion-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

ion-modal#add-modal ion-item {
  font-family: Nunito;
  border-radius: 10px;
  font-size: 22px;
  --padding-bottom: 0px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 0px;
  --border-style: none;
  --min-height: 72px;
  width: 373px;
}

ion-modal#add-modal ion-input .custom {
  font-family: Nunito;
  --placeholder-opacity: .8;

}

ion-datetime {
  --background: #ffffff;
  color: #4B4B4B;
  border-radius: 16px;
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
