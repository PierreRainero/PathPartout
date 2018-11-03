<template>
    <div id ="login">
        <div class="container my-col">
            <div class="form-signin">       
                <h3 class="form-signin-heading">Veuillez vous connecter</h3>
                <input id="inputEmail" type="text" class="form-control" name="username" placeholder="Adresse email" />
                <input id="inputPassword" type="password" class="form-control" name="password" placeholder="Mot de passe" />       
                <button id="buttonLogIn" class="btn btn-lg btn-block" type="submit" style="color: white !important;" v-on:click="login()">Connexion</button>   
            </div>
            <div v-if="error" style="margin-top: 30px" class="form-signin-error">
              <div>
                <p style="color: red">Erreur, veuillez verifier vos identifiants de connexion !</p>
              </div>
            </div>
        </div>
    </div>
</template>


<script>
import AuthenticationHelper from "../Helpers/authenticationHelper.js";
export default {
  name: "LogIn",
  data: function() {
    return {
      error: false,
      helper: new AuthenticationHelper()
    };
  },
  methods: {
    login() {
      let username = document.getElementById("inputEmail").value;
      let password = document.getElementById("inputPassword").value;
      const validAuthentication = this.helper.validateLogIn(username, password);
      if (validAuthentication) {
        this.$emit("authenticated", true);
        this.$router.replace({ name: "Profile" });
      } else {
        this.error = true;
      }
    }
  }
};
</script>


<style scoped>
.form-signin-error {
  max-width: 400px;
  width: 50%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.7);
}

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