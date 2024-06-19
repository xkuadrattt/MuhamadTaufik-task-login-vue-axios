import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
// import ProfilePage from "@/views/ProfilePage.vue";
import store from "@/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "loginPage",
      component: LoginPage,
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
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requireAuth)) {
//     if (store.state.userdata == null) {
//       next("/");
//     }
//   }
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (store.state.userdata !== null) {
//       next("/profile");
//     }
//   }
//   next();
// });

export default router;
