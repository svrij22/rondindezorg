import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import HomePageComponent from "./components/HomePageComponent";
import ContactPageComponent from "./components/ContactPageComponent";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: HomePageComponent },
  { path: '/contact', component: ContactPageComponent }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
