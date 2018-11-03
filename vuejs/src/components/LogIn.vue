<template>
    <div id ="login">
        <div class="container my-col">
            <div class="form-signin">       
                <h3 class="form-signin-heading">Veuillez vous connecter</h3>
                <input id="inputEmail" type="text" class="form-control" name="username" placeholder="Adresse email" />
                <input id="inputPassword" type="password" class="form-control" name="password" placeholder="Mot de passe" />       
                <button id="buttonLogIn" class="btn btn-lg btn-block" type="submit"><router-link to="/profile" style="color: white !important;">Connexion</router-link></button>   
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "LogIn"
};
</script>


<style scoped>
.form-signin {
  padding-top: 20vh;
  max-width: 400px;
  width: 50%;
  margin: 0 auto;
}

#login {
  height: 94vh;
  background: url(https://www.travelwyoming.com/sites/default/files/uploads/consumer/7-18_MedicineBowHikingFishing_KL_0708_3298.jpg)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: bottom;
}
</style>