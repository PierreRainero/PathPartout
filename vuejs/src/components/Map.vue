<template>
    <div class="container-fluid">
        <div class="map">
            <GoogleMap />
        </div>
    </div>
    
</template>


<script>
import GoogleMap from './GoogleMap.vue'
export default {
  name: "Map",
  components: {
      GoogleMap
  }
};

</script>


<style scoped>

.map {
    border: solid 1px black;
    margin-top: 3vh;
}

</style>
