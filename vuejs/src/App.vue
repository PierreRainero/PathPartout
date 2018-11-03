<template>

  <div id="app">
    <Navbar :authenticated="isAuthenticated()" />
    <router-view @authenticated="setAuthenticated" />
  </div>

</template>


<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
      authenticated: false
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
    isAuthenticated() {
      return this.authenticated;
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
