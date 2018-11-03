<template>
  <div class="container">
    <div class="left-panel">
      <div class="navbar-brand">Mes tracers</div>
      <Run />
    </div>
  </div>
</template>


<script>
import Run from './Run.vue'
export default {
  name: "Runs",
  components: {
    Run
  }
};

</script>


<style scoped>

.left-panel {
  border: 1px solid black;
  margin-top: 3vh;
}


</style>
