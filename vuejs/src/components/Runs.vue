<template>
  <div>
    <div class="left-panel">
      <div class="navbar-brand" v-on:click="resetRuns()">{{ clickedItem == null ? 'Mes tracers' : '	&lt; Mes tracers'}}</div>
        <div class="scrollable">
          <div v-for="(run, index) in runs" :key="index" v-on:click="clickRun(index)">
            <Run :title=run.title :description=run.description :date=run.date :img=run.img  :clicked=isClicked(index) :length=run.length :pois=run.pois @viewRunOnSmartphone="viewRunOnSmartphone"/>
          </div>
          <div class="btn-add">
            <button type="button" class="btn btn-success" v-on:click="addRun()">+ Ajouter un tracer</button>
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
      clickedItem: null
    };
  },
  methods: {
    clickRun: function(index) {
      this.clickedItem = index;
      this.$emit("clicked", index);
    },
    isClicked: function(index) {
      return index == this.clickedItem;
    },
    resetRuns: function() {
      this.clickedItem = null;
      this.$emit("reset");

    },
    addRun: function() {
      this.$emit("addRun");
    },
    viewRunOnSmartphone() {
      this.$emit("viewRunOnSmartphone");
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
  margin-top: 30px;
}
</style>
