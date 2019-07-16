import Vue from "vue";
import Router from "vue-router";
import LandingPage from "./components/LandingPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage
    },
    {
      path: "/sandbox",
      name: "sandbox",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./components/Sandbox/Sandbox.vue"
        )
    }
  ]
});
