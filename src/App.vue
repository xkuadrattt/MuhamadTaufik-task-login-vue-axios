<script setup>
import { computed } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useStore } from "vuex";
import cookie from "js-cookie";

const router = useRouter();
const store = useStore();

const userdataa = computed(() => store.state.userdata);

const handleSignOut = () => {
  cookie.remove("userdata");
  store.commit("SET_LOGOUT");
  router.push({ path: "/login" });
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top custom-blur shadow-sm">
      <div class="container">
        <span class="navbar-brand custom-brand">CalmlyShop</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item" v-if="userdataa">
              <RouterLink to="/profile" class="nav-link">Profile</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/shopping" class="nav-link">Shopping</RouterLink>
            </li>
            <li class="nav-item" v-if="!userdataa">
              <RouterLink to="/login" class="btn border border-primary"
                >Login</RouterLink
              >
            </li>
            <li class="nav-item" v-if="userdataa">
              <a
                href="#"
                class="nav-link btn btn-warning border border-warning"
                @click="handleSignOut"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main class="container mt-5 pt-5">
    <RouterView />
  </main>
</template>
