<template>
  <div class="runCard card" v-bind:class="{ isActive: clicked }">
    <div class="row">
      <div class="col-md-3 vertical-align">
        <img class="card-img" v-if="!helper.isMobileDevice()" :src="setImage()" >
      </div>
      <div class="col-md-7 vertical-align">
        <div class="card-body-right">
          <b>{{title}}</b>
          <p>{{description}}</p>
        </div>
        <div v-if="helper.isMobileDevice()" v-show="clicked">
          <button>Voir sur la carte</button>
        </div>
      </div>
      <div class="col-md-2 vertical-align">
        <h6><span class="badge badge-secondary" style="background-color: #009b00">{{length}}</span></h6>
      </div>
    </div>
  </div>
</template>


<script>
import DeviceHelper from "../Helpers/deviceHelper.js";
import Run1 from "../resources/run-1.png";
import Run2 from "../resources/run-2.png";
export default {
  name: "Run",
  props: ["title", "description", "date", "img", "clicked", "length", "pois"],
  data: function() {
    return {
      helper: new DeviceHelper
    };
  },
  methods: {
    setImage() {
      if (this.img == "run-1.png") {
        return Run1;
      }
      if (this.img == "run-2.png") {
        return Run2;
      }
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
