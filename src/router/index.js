import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("@/views/HomePage.vue"),
      meta: {
        guest: true,
      },
    },
    {
      path: "/login",
      name: "loginPage",
      component: () => import("@/views/LoginPage.vue"),
      meta: {
        guest: true,
      },
    },

    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfilePage.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/editPage/",
      name: "editPage",
      component: () => import("@/components/editComponents/EditComponents.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/shopping",
      name: "shopping",
      component: () => import("@/views/ShoppingPage.vue"),
      meta: {
        requireAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (store.state.userdata == null) {
      next("/login");
    }
  }

  next();
});

export default router;
