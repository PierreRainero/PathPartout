<template>
  <div class="runCard card" v-bind:class="{ isActive: clicked }">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-2 d-none d-xl-block">
        <img class="" v-if="!helper.isMobileDevice()" :src="img" >
      </div>
      <div class="col-lg-6 col-md-10">
        <div class="card-body-right">
          <b>{{title}}</b>
          <p>{{description}}</p>
        </div>
        <div v-if="helper.isMobileDevice()" v-show="clicked">
          <button type="button" class="btn btn-success" v-on:click="viewRun">Voir sur la carte</button>
        </div>
      </div>
      <div class="col-md-2 d-none d-xl-block">
        <h6><span class="badge badge-secondary" style="background-color: #009b00">{{length}}</span></h6>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>


<script>
import DeviceHelper from "../Helpers/deviceHelper.js";
export default {
  name: "Run",
  props: ["title", "description", "date", "img", "clicked", "length", "pois"],
  data: function() {
    return {
      helper: new DeviceHelper
    };
  },
  methods: {
    viewRun() {
      this.$emit("viewRunOnSmartphone");
    }
  }
};
</script>

<style scoped>
.runCard:hover {
  cursor: pointer;
}

.card-body-right{
  vertical-align: middle;
}

.card-img {
  height: 40px;
  width: 40px;
  margin-left: 30px;
}

.vertical-align {
  display: flex;
  align-items: center;
}

.isActive {
  background: #54cd41;
}
</style>
