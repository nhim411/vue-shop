import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ProductView",
    component: () =>
      import(/* webpackChunkName: "ProductList" */ "../views/ProductView.vue"),
  },
  {
    path: "/cart",
    name: "CartView",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "CartView" */ "../views/CartView.vue"),
  },
  {
    path: "/login",
    name: "LoginView",
    component: () =>
      import(/* webpackChunkName: "LoginView" */ "../views/LoginView.vue"),
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next({ name: "LoginView" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
