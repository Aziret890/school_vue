import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./page/Home.vue";
import "../src/style.css";
//!AOS
import "aos/dist/aos.css";
//! VUITIFY
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
//!VUE ICON
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
addIcons(FaFlag, RiZhihuFill);
const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  {
    path: "/",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(vuetify).use(router).mount("#app");
