<template>
  <h1 v-if="userdata">
    {{
      userdata.role === "admin"
        ? "Products Database"
        : "Click Shopping on Navbar"
    }}
  </h1>
  <h1 v-else>Homepage, Login for information</h1>

  <section class="mt-5" v-if="userdata.role === 'admin'">
    <TableHome />
  </section>
</template>

<script setup>
import TableHome from "@/components/TableHome/TableHome.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const userdata = computed(() => store.state.userdata);
</script>
