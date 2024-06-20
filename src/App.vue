<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const userdata = store.state.token;
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/profile" v-if="userdata">Profile</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
