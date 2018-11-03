<template>
    <div id ="signIn">
        <div class="container my-col">
            <div class="form-signin">       
                <h3 class="form-signin-heading">Veuillez vous inscrire</h3>
                <input type="text" class="form-control" name="username" placeholder="Adresse email" />
                <input type="password" class="form-control" name="password" placeholder="Mot de passe" />   
                <input type="password" class="form-control" name="password" placeholder="Confirmation mot de passe" /> 
                <button class="btn btn-lg btn-block" type="submit"><router-link to="/profile" style="color: white !important;">Inscription</router-link></button>   
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: "SignIn"
};
</script>

<style scoped>

.form-signin {
  padding-top: 20vh;
  max-width: 400px;
  width: 50%;
  margin: 0 auto;
}

#signIn {
  height: 94vh;
  background: url(https://www.travelwyoming.com/sites/default/files/uploads/consumer/7-18_MedicineBowHikingFishing_KL_0708_3298.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: bottom;
}
</style>