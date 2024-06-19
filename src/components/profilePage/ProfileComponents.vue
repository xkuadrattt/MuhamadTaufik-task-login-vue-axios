<template>
  <nav>
    <button @click="handleSignOut">Sign Out</button>
  </nav>
  <section>
    <h1>Hallo saya, {{ userdata.name }}</h1>
    <img :src="userdata.avatar" alt="wujud asli si John" />
    <p>saya sebagai {{ userdata.role }}</p>
  </section>
</template>

<script>
import { mapState } from "vuex";
import cookie from "js-cookie";
export default {
  computed: mapState(["userdata"]),
  methods: {
    handleSignOut() {
      cookie.remove("userdata");
      this.$router.push({ path: "/" });
    },
  },
};
</script>
