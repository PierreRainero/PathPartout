<template>
  <div class="container-fluid myCol">
    <div id="map">
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
  mounted() {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: this.zoom
    });
    this.clearMarkers();
    this.buildMarkers();

    google.maps.event.addListener(this.map, "click", (event) => {
      if (this.addingRun == true) {
        this.placeMarker(event.latLng);
      }
    });
  },
  data() {
    return {
      runs: RunsJSON.runs,
      path: [],
      pois: ListRunsJSON.runs[0].pois,
      markers: [],
      polylines: [],
      latitude: 43.615738,
      longitude: 7.0721,
      zoom: 11,
      addingRun: false
    };
  },

  methods: {
    placeMarker(location) {
      var marker = new google.maps.Marker({
        position: location,
        map: this.map
      });
      this.markers.push(marker);
      this.path.push({lat: location.lat(), lng: location.lng()});
      this.buildPolylines();
    },
    buildPolylines() {
      let _poly = [];
      for (var i = 0; i < this.path.length; i++) {
        let _lat = parseFloat(this.path[i].lat);
        let _lng = parseFloat(this.path[i].lng);
        _poly.push({ lat: _lat, lng: _lng });
      }
      let poly = new google.maps.Polyline({
        path: _poly,
        geodesic: true,
        strokeColor: "#008000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: this.map
      });
      this.polylines.push(poly);
    },
    buildMarkers() {
      this.clearMarkers();
      this.markers = [];
      for (var i = 0; i < this.pois.length; i++) {
        let _lat = parseFloat(this.pois[i].position.lat);
        let _lng = parseFloat(this.pois[i].position.lng);
        var marker = new google.maps.Marker({
          position: { lat: _lat, lng: _lng },
          map: this.map
        });
        this.markers.push(marker);
      }
    },

    clearMarkers() {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(null);
      }
    },

    clearPolylines() {
      for (var i = 0; i < this.polylines.length; i++) {
        this.polylines[i].setMap(null);
      }
    },

    setMarkers(index) {
      this.clearMarkers();
      this.pois = this.runs[index].pois;
      this.markers = [];
      for (var i = 0; i < this.pois.length; i++) {
        let _lat = parseFloat(this.pois[i].position.lat);
        let _lng = parseFloat(this.pois[i].position.lng);
        var marker = new google.maps.Marker({
          position: { lat: _lat, lng: _lng },
          map: this.map
        });
        this.markers.push(marker);
      }
      this.clearPolylines();
      this.path = this.runs[index].path;
      this.buildPolylines();
      this.map.setCenter(this.path[0]);
      this.map.setZoom(14);
    },

    resetMarkers() {
      this.addingRun = false;
      this.clearPolylines();
      this.pois = ListRunsJSON.runs[0].pois;
      this.path = ListRunsJSON.runs[0].path;
      this.buildMarkers();
      this.map.setCenter({ lat: 43.615738, lng: 7.0721 });
      this.map.setZoom(11);
      
    },

    isAddingRun() {
      this.pois = [];
      this.path = [];
      this.clearPolylines();
      this.clearMarkers();
      this.addingRun = true;
    },

    newMarker(value) {
      let index = value.indexOf(",");
      let lat = parseFloat(value.substring(0, value.indexOf(",")));
      let lng = parseFloat(
        value.substring(value.indexOf(",") + 1, value.length)
      );
      this.pois.push({ position: { lat: lat, lng: lng } });
      this.path.push({ lat: lat, lng: lng });
    }
  }
};
</script>

<style scoped>
.myCol {
  padding-left: 0px;
  padding-right: 0px;
}

#map {
  height: 92vh;
}
</style>