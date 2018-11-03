<template>
  <div>
    <div class="left-panel">
      <div class="navbar-brand">Mes tracers</div>
        <div class="scrollable">
          <div v-for="(run, index) in runs" :key="index" v-on:click="clickRun(index)">
            <Run :title=run.title :description=run.description :date=run.date :img=run.img  :clicked=isClicked(index) />
          </div>
        </div>
    </div>
  </div>
</template>


<script>
import Run from "./Run.vue";
import RunsJSON from "../resources/runs.json";
export default {
  name: "Runs",
  components: {
    Run
  },
  data: function() {
    return {
      runs: RunsJSON.runs,
      clickedItem: 0
    };
  },
  methods: {
    clickRun: function(index) {
      this.clickedItem = index;
      this.$emit("clicked", index);
    },
    isClicked: function(index) {
      return index == this.clickedItem;
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
}
.left-panel {
  /* border: 1px solid black; */
}

.scrollable {
  height: 88vh;
  overflow: scroll;
  overflow-x: hidden;
  /* overflow-y: hidden; */
}
</style>
