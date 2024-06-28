<template>
  <h1 v-if="userdata && userdata.role === 'admin'">Products Database</h1>

  <div v-if="userdata && userdata.role === 'customer'" class="custom-login">
    <h2>go shopping</h2>
    <div class="custom-cta">
      <RouterLink to="/shopping" class="btn btn-success border border-success"
        >Shopping</RouterLink
      >
    </div>
  </div>

  <div v-if="!userdata" class="custom-login">
    <h2>Login for information. or go shopping</h2>
    <div class="custom-cta">
      <RouterLink to="/shopping" class="btn btn-success border border-success"
        >Shopping</RouterLink
      >
      <RouterLink to="/login" class="btn border border-primary"
        >Login</RouterLink
      >
    </div>
  </div>
  <section class="mt-5" v-if="userdata">
    <div v-if="userdata.role === 'admin'">
      <TableHome />
    </div>
  </section>
</template>

<script setup>
import TableHome from "@/components/TableHome/TableHome.vue";
import { computed } from "vue";
import cookie from "js-cookie";

const userdata = computed(() => {
  const userdata = cookie.get("userdata");
  return userdata ? JSON.parse(userdata) : null;
});
</script>
