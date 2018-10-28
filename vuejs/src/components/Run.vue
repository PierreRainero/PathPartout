<template>
  <div class="runCard card">
    <div class="row">
      <div class="col-md-6">
      <img class="card-img" v-if="!helper.isMobileDevice()" :src="img" alt="Card image cap">
    </div>
    <div class="col-md-6">
      <div class="card-body-right">
        <b>{{title}}</b>
        <p>{{description}}</p>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
import DeviceHelper from "../deviceHelper.js";
export default {
  name: "Run",
  props: ["title", "description", "date", "img"],
  data: function() {
    return {
      helper: new DeviceHelper
    };
  }
};
</script>

<style scoped>
.runCard:hover {
  background: #54cd41;
  cursor: pointer;
}

.card-body-right{
  vertical-align: middle;
}
</style>
