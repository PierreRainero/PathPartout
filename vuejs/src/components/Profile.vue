<template>
    <div class="row">
        <div class="col-md-4 myCol">
            <Runs v-if="this.isAddingRun == false" @clicked="onClickChild" @reset="reset" @addRun="addRun"/>
            <AddRun v-if="this.isAddingRun == true" @back="back" @newMarker="newMarker" />
        </div>
        <div v-if="!helper.isMobileDevice()" class="col-md-8 myCol">
            <div>
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
      isAddingRun: false
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
      this.$refs.runIndex.resetMarkers();
    },
    newMarker(value) {
      this.$refs.runIndex.newMarker(value);
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
