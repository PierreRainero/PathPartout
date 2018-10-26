<template>
  <div class="container">
    <div class="left-panel">
      <div class="navbar-brand">Mes tracers</div>
      <div v-for="(run, index) in runs" :key="index">
        <Run :title=run.title :description=run.description :date=run.date :img=run.img />
      </div>
    </div>
  </div>
</template>


<script>
import Run from './Run.vue'
import RunsJSON from '../resources/runs.json';
export default {
  name: "Runs",
  components: {
    Run
  },
  data: function() {
    return {
      runs: RunsJSON.runs
    }
  },
};

</script>


<style scoped>
.navbar-brand {
  background: #009b00;
  width: 100%;
  color: white;
}
.left-panel {
  border: 1px solid black;
  margin-top: 3vh;
}


</style>
