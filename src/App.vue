<script setup>
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const profileLink = function () {
  return store.state.token;
};

computed(() => {
  profileLink;
});
</script>

<template>
  <header>
    <div class="container d-flex gap-4">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <RouterLink to="/" class="mx-4">Home</RouterLink>
        <RouterLink to="/login" class="mx-4">Login</RouterLink>
        <RouterLink to="/profile" class="mx-4" v-if="profileLink()"
          >Profile</RouterLink
        >
      </nav>
    </div>
  </header>
  <main class="container">
    <RouterView />
  </main>
</template>
