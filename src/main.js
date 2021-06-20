import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
