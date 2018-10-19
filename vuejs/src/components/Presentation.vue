<template>

  <div>
    <b-img src="http://static.apidae-tourisme.com/filestore/objets-touristiques/images/10/255/786186.jpg" fluid-grow alt="Responsive image" class="image_fond" />
    <div class="row my-col">
      <div class="col-md-7 info-box col-sm-12">
        <div>
          <h3 style="margin-top: 20px">Il y a 32 randonnées autour de Biot</h3>
          <p>
            Que vous soyez en vacances ou que vous ayez juste envie de décompresser, laissez vous tenter par <b>Path'Partout</b>.<br>
            Créez vous un compte en quelques clics et commencez l'aventure gratuitement !
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
      <div class="col-md-5 text-left d-none d-md-block">
        <div>
          <img src="../assets/phoneframe.png" alt="Responsive image" class="smartphone" />
          <img src="../assets/fond_phone.jpg" alt="Responsive image" class="fond" />
        </div>
      </div>
    </div>
    <div class="container">
        <div class="col-md-12 text-left steps">
      <h3>Étapes à suivre avant de partir en ballade</h3>
      <div class="row">
        <div class="col-md-4 text-center">
          <p>1. Tracez</p>
        </div>
        <div class="col-md-4 text-center">
          <p>2. Explorez</p>
        </div>
        <div class="col-md-4 text-center">
          <p>3. Partagez</p>
        </div>
      </div>
    </div>
    </div>
  </div>

</template>


<script>

export default {
  name: "Presentation"
};

</script>


<style scoped>

.smartphone {
    width: 200px;
    height: auto;
    position: absolute;
    top: -6.375rem;
    margin-left: 30px;
    z-index: 10;
}

.fond{
    position: absolute;
    top: -5.2rem;
    margin-left: 48px;
    z-index: 1;
}

.info-box {
  padding-left: 10%;
}

.steps {
  padding-top:30px;
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
