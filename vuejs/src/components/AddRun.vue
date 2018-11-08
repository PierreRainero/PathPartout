<template>
    <div class="left-panel">
      <div class="navbar-brand">Ajouter un tracer</div>
        <div class="formulaire">
            <div class="form-group">
                <label for="nameRun"><b>1.</b> Donner un nom à votre tracer</label>
                <input type="text" class="form-control" id="nameRun" placeholder="Ballade en forêt">
            </div>
            <div class="form-group">
                <label for="description"><b>2.</b> Ajouter une courte description</label>
                <textarea class="form-control" id="description" rows="3" placeholder="Idéal avec les enfants pour se rafraîchir."></textarea>
            </div>
            <div class="form-group">
                <label for="description"><b>3.</b> Ajouter des points sur la carte pour définir votre tracer</label>
                <!-- <gmap-autocomplete style="width: 100%; margin-bottom: 10px" id="inputMarker"
                  @place_changed="setPlace">
                </gmap-autocomplete> -->
                <!-- <button type="button" class="btn btn-success" v-on:click="addMarker()">Ajouter un point</button> -->
            </div>
        </div>
          <div class="btn-add">
            <button type="button" class="btn btn-secondary" v-on:click="back()">&lt; Retour</button>
            <button type="button" class="btn btn-success" v-on:click="add()">Sauvegarder</button>
          </div>
    </div>
</template>


<script>
export default {
  name: "AddRun",
  components: {},
  data: function() {
    return {
        nbPoints: 0
    };
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    back: function() {
      this.$emit("back");
    },
    add: function() {
      this.$emit("back");
    },
    addMarker: function() {
      if (this.currentPlace) {
        let marker = this.currentPlace.geometry.location.lat() + ',' + this.currentPlace.geometry.location.lng();
        this.$emit("newMarker", marker);
        document.getElementById('inputMarker').value = '';
      }
    }
  }
};
</script>


<style scoped>
.navbar-brand {
  background: #006b00;
  width: 100%;
  color: white;
  padding-right: 0px;
  margin-right: 0px;
  cursor: pointer;
}

.scrollable {
  height: 88vh;
  overflow: scroll;
  overflow-x: hidden;
  /* overflow-y: hidden; */
}

.btn-add {
  margin-top: 50px;
}

.formulaire {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
}

.form-group {
    margin-bottom: 40px;
}
</style>
