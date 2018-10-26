<template>
    <div class="row">
        <div class="col-md-4">
            <Runs/>
        </div>
        <div class="col-md-8">
            <div style="margin-top:3vh">
                <Map />
            </div>
        </div>
    </div>
</template>


<script>
import Map from "./Map.vue";
import Runs from "./Runs.vue";
export default {
  name: "Profile",
  components: {
    Map,
    Runs
  }
};
</script>


<style scoped>
</style>
