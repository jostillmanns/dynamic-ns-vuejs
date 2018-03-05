import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import { sync } from 'vuex-router-sync';
import { routes } from './app/routes';
import store from './app/store';

Vue.config.productionTip = false

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes,
  store,
});

sync(store, router);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
