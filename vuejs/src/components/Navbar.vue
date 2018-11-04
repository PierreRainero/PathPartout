<template>

<b-navbar toggleable="md" type="dark" class="bg-info-pathpartout">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand><router-link to="/" class="pathpartout_link">PATH'PARTOUT</router-link></b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto">
      <b-nav-item class="navbar-item" v-if="!authenticated"><router-link to="/LogIn" class="nav-link">Connexion</router-link></b-nav-item>
      <b-nav-item class="navbar-item" v-if="!authenticated"><router-link to="/SignIn" class="nav-link">Inscription</router-link></b-nav-item>
      <b-nav-item class="navbar-item" v-if="authenticated" v-on:click="logout()"><router-link to="/" class="nav-link">Se deconnecter</router-link></b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

</template>


<script>
export default {
  name: "Navbar",
  props: ["authenticated"],
  methods: {
    logout() {
      this.$emit("authenticated", false);
    }
  }
};
</script>


<style scoped>
/* .navbar {
  height: 6vh;
} */
.pathpartout_link {
  color: white;
  text-decoration: none;
}
.bg-info-pathpartout {
  background-color: #009b00;
}
</style>
