<template>
  <section>
    <div class="card" style="width: 18rem">
      <img :src="userdata.avatar" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ userdata.name }}</h5>
        <p class="card-text">role : {{ userdata.role }}</p>
        <a href="#" class="btn btn-warning" @click="handleSignOut">Sign out</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import cookie from "js-cookie";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const handleSignOut = () => {
  cookie.remove("userdata");
  store.commit("SET_LOGOUT");
  router.push({ path: "/login" });
};

const userdata = computed(() => {
  const userdata = cookie.get("userdata");
  return userdata ? JSON.parse(userdata) : null;
});
</script>
