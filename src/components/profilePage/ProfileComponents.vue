<template>
  <section>
    <div class="card mx-auto mt-5 shadow-lg" style="width: 18rem">
      <img :src="userdata.avatar" class="card-img-top" alt="User avatar" />
      <div class="card-body text-center">
        <h5 class="card-title">{{ userdata.name }}</h5>
        <p class="card-text">Role: {{ userdata.role }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import cookie from "js-cookie";
import { computed } from "vue";

const userdata = computed(() => {
  const userdata = cookie.get("userdata");
  return userdata ? JSON.parse(userdata) : null;
});
</script>
