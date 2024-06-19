<template>
  <section>
    <h1>Hallo saya, {{ userdata.name }}</h1>
    <img :src="userdata.avatar" alt="wujud asli si John" />
    <p>saya sebagai {{ userdata.role }}</p>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["userdata"]),
};
</script>
