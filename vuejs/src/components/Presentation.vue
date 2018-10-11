<template>
<div>
  <b-img src="http://static.apidae-tourisme.com/filestore/objets-touristiques/images/10/255/786186.jpg" fluid-grow alt="Responsive image" class="image_fond" />
  <div class="row my-col">
    <div class="col-md-7 info-box">
      <div>
        <h3 style="margin-top: 20px">Il y a 32 randonnées autour de Biot</h3>
        <p>
          Pour démarrer, créez un compte Path'Partout gratuit, puis téléchargez l'application officielle.
        </p>
      </div>
      <div class="row">
        <div class="col-md-12" style="margin-bottom: 20px">
          <a>
            <img src="../assets/badge-apple.svg"/>
          </a>
          <a>
            <img src="../assets/badge-google-play.png"/>
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-5 text-left">
      <Smartphone />
    </div>
  </div>
  <div class="container">
      <div class="col-md-12 text-left steps">
    <h3>Étapes à suivre avant de partir en ballade</h3>
  </div>
  </div>
</div>
</template>

<script>
import Smartphone from "./Smartphone.vue";

export default {
  name: "Presentation",
  components: {
    Smartphone
  }
};
</script>

<style scoped>

.steps {
  padding-top:30px;
}
.info-box{
  padding-left: 20%;
  padding-right: 10%;
}
.my-col {
  background-color: #f5f5f5;
}
.row {
  margin: 0;
}
.image_fond {
  max-height: 450px !important;
  object-fit: cover;
  object-position: 56%;
  z-index: 1;
}
</style>
