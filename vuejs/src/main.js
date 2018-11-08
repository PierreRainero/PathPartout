import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false
Vue.use(
  BootstrapVue
);

// Vue.use(
//   VueGoogleMaps, {
//     load: {
//       key: "AIzaSyBYiDrtK9XbrApT1eKq26UUo6lygngTNkI",
//       libraries: "places" // necessary for places input
//     }
//   }
// );

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
