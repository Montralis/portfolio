import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Main from "./components/Main.vue";
import Gallery from "./components/Gallery.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Main },
  { path: "/gallery", component: Gallery },
];

const router = new VueRouter({
  routes,
  mode: "history", 
});

new Vue({
  router, 
  render: (h) => h(App),
}).$mount("#app");
