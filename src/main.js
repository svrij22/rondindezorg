import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import HomePageComponent from "./components/HomePageComponent";
import OverOnsPageComponent from "./components/OverOnsPageComponent";
import VVTPageComponent from "./components/VVTPageComponent";
import RCPageComponent from "./components/RCPageComponent";
import ZZPPageComponent from "./components/ZZPPageComponent";
import ContactPageComponent from "./components/ContactPageComponent";
import FormPageComponent from "./components/FormPageComponent";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: HomePageComponent },
  { path: '/overons', component: OverOnsPageComponent },
    { path: '/vvt', component: VVTPageComponent },
    { path: '/revalidatiecentra', component: RCPageComponent },
    { path: '/contact', component: ContactPageComponent },
    { path: '/zzp', component: ZZPPageComponent },
    { path: '/form', component: FormPageComponent }
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
