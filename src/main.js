import Vue from 'vue'
import App from './App.vue'
import Router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import { BootstrapVue } from 'bootstrap-vue'
import Vuetify from 'vuetify'



Vue.config.productionTip = false
Vue.use(Vuelidate,BootstrapVue,Vuetify);
new Vue({
  router: Router,
  store,
  Vuetify,
  render: h => h(App),
  }).$mount('#app');

