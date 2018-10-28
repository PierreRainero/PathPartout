<template>
    <div class="row">
        <div class="col-md-4">
            <Runs @clicked="onClickChild"/>
        </div>
        <div class="col-md-8">
            <div style="margin-top:3vh">
                <GoogleMap ref="runIndex"/>
            </div>
        </div>
    </div>
</template>


<script>
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
          indexRun: 0
      }
  },
  methods: {
    onClickChild (value) {
      this.$refs.runIndex.setMarkers(value)
    }
  }
};
</script>


<style scoped>

.row {
    margin-right: 0px !important;
}
</style>
