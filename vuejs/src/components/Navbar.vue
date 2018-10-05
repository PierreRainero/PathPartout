<template>
<b-navbar toggleable="md" type="dark" class="bg-info-pathpartout">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">Path'Partout</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav> -->

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item class="navbar-item" href="#">Inscription</b-nav-item>
      <b-nav-item class="navbar-item" href="#">Connexion</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-info-pathpartout {
  background-color: #32cd32;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
}
</style>
