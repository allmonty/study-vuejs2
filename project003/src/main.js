import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.filter('currency', function (value) {
  return '$ ' + parseFloat(value).toFixed(2);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
