<template>
    <div ref="mapContainer" style="height: 100%;"></div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { google } from '@capacitor/google-maps';
  
  interface Marker {
    position: google.maps.LatLng,
    title?: string,
    icon?: string,
    }

  export default defineComponent({
    name: 'Map',
    props: {
      apiKey: {
        type: String,
        required: true,
      },
      addressList: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        map: null,
        markers: [] as Marker[],
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const mapOptions = {
          zoom: 12,
          center: new google.maps.LatLng(48.8566, 2.3522),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.$refs.mapContainer, mapOptions);
        this.addMarkers();
      },
      addMarkers() {
        this.clearMarkers();
        for (const address of this.addressList) {
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address }, (results: any, status: any) => {
            if (status === 'OK') {
              const position = results[0].geometry.location;
              const marker = new google.maps.Marker({
                position,
                map: this.map,
              });
              this.markers.push(marker);
            } else {
              console.log('Geocode was not successful for the following reason: ' + status);
            }
          });
        }
      },
      clearMarkers() {
        for (const marker of this.markers) {
          marker.setMap(null);
        }
        this.markers = [];
      },
    },
  });
  </script>
  
  <style>
    #map {
      height: 100%;
    }
  </style>
  