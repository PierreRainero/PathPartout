<template>
  <div class="runCard card">
    <div class="row">
      <div class="col-md-6">
      <img class="card-img" :src="img" alt="Card image cap">
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
export default {
  name: "Run",
  props: ["title", "description", "date", "img"]
};
</script>

<style scoped>
.runCard:hover {
  background: #54cd41;
  cursor: pointer;
}
</style>
