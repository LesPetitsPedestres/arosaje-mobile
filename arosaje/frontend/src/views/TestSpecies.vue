<template>
  <div>
    <input type="file" accept="image/*" @change="onFileChange" />
    <button @click="identifyPlant" :disabled="!selectedFile">Identifier la plante</button>
    <div v-if="result">
      <h3>Résultat :</h3>
      <p>{{ result }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      selectedFile: null as File | null,
      result: null as string | null,
    };
  },
  methods: {
    onFileChange(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files[0]) {
        this.selectedFile = inputElement.files[0];
      } else {
        this.selectedFile = null;
      }
    },
    async identifyPlant() {
      if (!this.selectedFile) {
        return;
      }

      const formData = new FormData();
      formData.append('images', this.selectedFile);

      try {
        const response = await axios.post(
          `https://my-api.plantnet.org/v2/identify/all?images=${this.selectedFile}&organs=flower&include-related-images=false&no-reject=false&lang=fr&api-key=2b10Yk0Hba0Sh8so1HIeyYbuA`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Api-Key': '2b10Yk0Hba0Sh8so1HIeyYbuA',
            },
          }
        );
        this.result = response.data.results[0].species.scientificNameWithoutAuthor;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
