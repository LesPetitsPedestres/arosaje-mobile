<template>
  <div>
    <input type="button" @click="capturePhoto" />
    <div></div>
    <button @click="identifyPlant">Identifier la plante</button>
    <div v-if="result">
      <h3>Résultat :</h3>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { Camera, CameraResultType } from '@capacitor/camera';

export default defineComponent({
  data() {
    return {
      imageData: null as string | null, 
      result: null as string | null,
    };
  },
  methods: {
    async capturePhoto() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.imageData = image.base64String || null;
      // this.imageData = image.dataUrl || null;
    },

    async identifyPlant() {
      const apiUrl = 'https://plant.id/api/v2/identify';

      const data = {
        api_key: "fQGtzQOtwBggm1K6U7agoOmU4JYWDYzqOdVCokKmszjKRBU7OY",
        images: [this.imageData],
        /* modifiers docs: https://github.com/flowerchecker/Plant-id-API/wiki/Modifiers */
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        /* plant details docs: https://github.com/flowerchecker/Plant-id-API/wiki/Plant-details */
        plant_details: ["common_names",
            "url",
            "name_authority",
            "wiki_description",
            "taxonomy",
            "synonyms"],
      };

      axios.post(apiUrl, data)
        .then(res => {
          console.log(res.data);
          const suggestions = res.data.suggestions;
          if (suggestions.length > 0) {
            const plantName = suggestions[0].plant_name;
            console.log(`Plant name: ${plantName}`);
            this.result = plantName;
          } else {
            console.log('No plant suggestions found');
          }
        }).catch(error => {
          console.error(error);
        })        
    },
  },
});
</script>
