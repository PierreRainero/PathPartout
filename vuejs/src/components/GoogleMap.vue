<template>
  <div class="container-fluid">
    <div class="map">
    <gmap-map
      :center="center"
      :zoom="14"
      id="googleMap"
      style="height: 85vh"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
      ></gmap-marker>

      <gmap-polyline v-bind:path="path" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
         
    </gmap-map>
  </div>
  </div>
</template>

<script>
import RunsJSON from "../resources/runs.json";
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 43.615921, lng: 7.071835 },
      currentPlace: null,
      runs: RunsJSON.runs,
      markers: [],
      path: []
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    setMarkers(index) {
      this.path = null;
      this.markers = this.runs[index].points;
      this.path = this.runs[index].path;
      this.center = this.path[0];
    }
  }
};
</script>

<style scoped>
.map {
  border: solid 1px black;
  margin-top: 3vh;
}
</style>