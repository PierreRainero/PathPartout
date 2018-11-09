<template>
  <div>
    <div class="row">
      <div class="col-md-4 myCol" v-show="mapOnSmartphone == false">
        <Runs v-if="this.isAddingRun == false" @clicked="onClickChild" @reset="reset" @addRun="addRun" @viewRunOnSmartphone="viewRunOnSmartphone"/>
        <AddRun v-if="this.isAddingRun == true" @back="back" @add="add" @newMarker="newMarker" />
      </div>
      <div v-show="helper.isMobileDevice() && mapOnSmartphone == true">
        <button type="button" class="btn btn-success" v-on:click="back">&lt; Retour</button>
      </div>
      <div v-show="!helper.isMobileDevice() || mapOnSmartphone == true" class="col-md-8 myCol">
        <GoogleMap ref="runIndex"/>
      </div>
    </div>
  </div>
</template>


<script>
import DeviceHelper from "../Helpers/deviceHelper.js";
import GoogleMap from "./GoogleMap.vue";
import Runs from "./Runs.vue";
import AddRun from "./AddRun.vue";
export default {
  name: "Profile",
  components: {
    GoogleMap,
    Runs,
    AddRun
  },
  data() {
    return {
      indexRun: 0,
      helper: new DeviceHelper(),
      isAddingRun: false,
      mapOnSmartphone: false
    };
  },
  methods: {
    onClickChild(value) {
      this.$refs.runIndex.setMarkers(value);
    },
    reset() {
      this.$refs.runIndex.resetMarkers();
    },
    addRun() {
      this.isAddingRun = true;
      this.$refs.runIndex.isAddingRun();
    },
    back() {
      this.isAddingRun = false;
      this.mapOnSmartphone = false;
      this.$refs.runIndex.resetMarkers();
    },
    newMarker(value) {
      this.$refs.runIndex.newMarker(value);
    },
    add() {
      this.isAddingRun = false;
      this.$refs.runIndex.add();
    },
    viewRunOnSmartphone() {
      this.$refs.runIndex.setMarkers(0);
      this.mapOnSmartphone = true;
    }
  }
};
</script>


<style scoped>
.row {
  margin-right: 0px !important;
}

.myCol {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
