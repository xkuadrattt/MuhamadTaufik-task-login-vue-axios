<template>
  <form @submit.prevent="handleSubmit">
    <div class="email">
      <label for="email">Email</label>
      <input
        type="email"
        placeholder="Masukan Email yang valid"
        v-model="email"
      />
    </div>
    <div class="password">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">Login</button>
  </form>
</template>
<script>
import cookie from "js-cookie";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post("https://api.escuelajs.co/api/v1/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.getProfile(response.data);
        });
    },
    getProfile(data) {
      const headers = {
        Authorization: `Bearer ${data.access_token}`,
      };
      this.$axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: headers,
        })
        .then((response) => {
          let userData = Object.assign(response.data, data);
          let forCookie = JSON.stringify(userData);
          this.$store.commit("SET_LOGIN", forCookie);
          cookie.set("userdata", forCookie, { expires: 1 });
        });
    },
  },
};
</script>
