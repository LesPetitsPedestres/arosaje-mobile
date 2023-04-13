<template>
  <!-- Liste des plantes pour le owner et sitter -->
    <ion-page class="page">
      <ion-header>
        <div class="head">
          <ion-toolbar>
            <ion-title color="primary">Liste de mes plantes</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar color="secondary" show-clear-button="always" :animated="true" placeholder="Rechercher"></ion-searchbar>
          </ion-toolbar>
        </div>
      </ion-header>
      <div v-for="plante in plantes" :key="plante.id">
        <PlantCard :plant_name="plante.nom" :plant_adress="plante.ville" :plant_photo="plante.photo" />
      </div>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar } from '@ionic/vue';
import PlantCard from '../components/PlantCard.vue'

export default defineComponent({
  components: {
    IonPage, IonHeader, IonToolbar, IonTitle, IonSearchbar,
    PlantCard
  },

  data() {
    return {
      plantes: [] as Array<{
        id: number;
        nom: string;
        ville: string;
        photo: string;
        proprietaire: string;
      }>,
      proprietaire: "Jean",
    };
  },

  mounted() {
    // Exemple de données brutes
    this.plantes = [
      {
        id: 1,
        nom: "Fougère",
        ville: "Paris",
        photo: "https://exemple.com/fougere.jpg",
        proprietaire: "Jean",
      },
      {
        id: 2,
        nom: "Orchidée",
        ville: "Lyon",
        photo: "https://exemple.com/orchidee.jpg",
        proprietaire: "Jean",
      },
      {
        id: 3,
        nom: "Succulente",
        ville: "Marseille",
        photo: "https://exemple.com/succulente.jpg",
        proprietaire: "Pierre",
      },
      {
        id: 4,
        nom: "Bonsaï",
        ville: "Nantes",
        photo: "https://exemple.com/bonsai.jpg",
        proprietaire: "Jean",
      },
      {
        id: 5,
        nom: "Palmier",
        ville: "Bordeaux",
        photo: "https://exemple.com/palmier.jpg",
        proprietaire: "Marie",
      },
    ];

    // Filtrer les plantes du propriétaire actuel
    this.plantes = this.plantes.filter((plante) => plante.proprietaire === this.proprietaire);
    console.log(this.plantes)
  },



// Utilisation de l'API

// mounted() {
//   fetch('https://exemple.com/api/plantes')
//     .then(response => response.json())
//     .then(data => {
//       this.plantes = data
//     })
// }


 
})
</script>

<style scoped>
.page {
  overflow: scroll;
  background-color: #FFFFFF;
}
  .head {
    gap: 10px;
  }
  ion-title {
    font-family: Nunito;
  }

  .card {
    text-decoration: none;
  }

  .card-custom {
    font-family: Nunito;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    height: 120px;
  }

  ion-card-title {
    font-size: 24px;
  }

  ion-icon {
    font-size: 40px;
    padding-right: 5px;
  }

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  .plante-picture {
    width: 120px;
    height: 120px;
  }
</style>