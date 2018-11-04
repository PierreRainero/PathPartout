<template>
    <div class="row">
        <div class="col-md-4 myCol">
            <Runs @clicked="onClickChild" @reset="reset"/>
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
export default {
  name: "Profile",
  components: {
    GoogleMap,
    Runs
  },
  data() {
    return {
      indexRun: 0,
      helper: new DeviceHelper()
    };
  },
  methods: {
    onClickChild(value) {
      this.$refs.runIndex.setMarkers(value);
    },
    reset() {
      this.$refs.runIndex.resetMarkers();
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
