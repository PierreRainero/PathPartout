<template>
  <div class="container-fluid myCol">
    <div class="map">
    <gmap-map
      :center="center"
      :zoom="11"
      id="googleMap"
      style="height: 92vh"
    >

      <gmap-marker
        :key="index"
        v-for="(m, index) in pois"
        :position="m.position"
        :icon="defineImage(m)"
      ></gmap-marker>

      <gmap-polyline v-bind:path="path" v-bind:options="{ strokeColor:'#008000'}">
         </gmap-polyline>
         
    </gmap-map>
  </div>
  </div>
</template>

<script>
import RunsJSON from "../resources/runs.json";
import ListRunsJSON from "../resources/listRuns.json";
import DepartImage from "../resources/start.png";
import ArriveImage from "../resources/finish.png";
import PoiImage from "../resources/poi.png";
import RuinsImage from "../resources/ruins.png";
import Run1 from "../resources/run-1.png";
import Run2 from "../resources/run-2.png";
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 43.615921, lng: 7.071835 },
      currentPlace: null,
      runs: RunsJSON.runs,
      path: [],
      pois: ListRunsJSON.runs[0].pois,
      departImage: DepartImage,
      arriveImage: ArriveImage,
      poiImage: PoiImage,
      ruinsImage: RuinsImage,
      currentRun: null
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
      this.path = this.runs[index].path;
      this.center = this.path[0];
      this.pois = this.runs[index].pois;
    },
    resetMarkers() {
      this.pois = ListRunsJSON.runs[0].pois;
      this.path = ListRunsJSON.runs[0].path;
    },
    isAddingRun() {
      this.pois = null;
    },
    defineImage(m) {
      if (m.name == "Depart") {
        return this.departImage;
      }
      if (m.name == "Arrivé") {
        return this.arriveImage;
      }
      if (m.name == "poi") {
        return this.poiImage;
      }
      if (m.name == "ruins") {
        return this.ruinsImage;
      }
      if (m.name == "1") {
        return Run1;
      }
      if (m.name == "2") {
        return Run2;
      }
    }
  }
};
</script>

<style scoped>
.myCol {
  padding-left: 0px;
  padding-right: 0px;
}
</style>