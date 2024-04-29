// import { createApp } from "vue";
// import "./style.css";
// import App from "./App.vue";
// import { createPinia } from "pinia";
// import Home from "./page/Home.vue";
// import { createMemoryHistory, createRouter } from "vue-router";
// const pinia = createPinia();
// const app = createApp(App);
// const routes = [{ path: "/", component: Home }];

// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// });
// app.use(pinia);
// app.use(router);
// createApp(App).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import Home from "./page/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

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

createApp(App).use(router).mount("#app");
