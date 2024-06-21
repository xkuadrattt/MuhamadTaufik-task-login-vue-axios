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

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    userdata() {
      return this.$store.state.userdata;
    },
  },
  methods: {
    handleSignOut() {
      this.$store.commit("SET_LOGOUT");
      this.$router.push("/");
    },
  },
};
</script>
