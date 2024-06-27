<script setup>
import { computed } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
import { useStore } from "vuex";
import cookie from "js-cookie";

const router = useRouter();
const store = useStore();
const profileLink = function () {
  return store.state.userdata;
};

const handleSignOut = () => {
  cookie.remove("userdata");
  store.commit("SET_LOGOUT");
  router.push({ path: "/login" });
};

computed(() => {
  profileLink;
});
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">My App</RouterLink>
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
            <li class="nav-item" v-if="!profileLink()">
              <RouterLink to="/login" class="nav-link">Login</RouterLink>
            </li>
            <li class="nav-item" v-if="profileLink()">
              <RouterLink to="/profile" class="nav-link">Profile</RouterLink>
            </li>
            <li class="nav-item" v-if="profileLink()">
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
