<template>
  <h1 v-if="userdata">Product Database</h1>
  <h1 v-else>Homepage, Login for information</h1>

  <section class="mt-5">
    <TableHome v-if="userdata" />
  </section>
</template>

<script setup>
import TableHome from "@/components/TableHome/TableHome.vue";
import cookie from "js-cookie";

const userdata = cookie.get("userdata");
</script>
