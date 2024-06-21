<template>
  <form @submit.prevent="handleSubmit" class="form-input">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        placeholder="Masukan Email yang valid"
        v-model="email"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
      />
    </div>
    <button class="btn btn-primary" type="submit">Login</button>
    <p>{{ msgError }}</p>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      msgError: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.email || this.password) {
        this.$axios
          .post("https://api.escuelajs.co/api/v1/auth/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            this.getProfile(response.data);
          });
      } else {
        this.msgError = "galat. mohon periksa";
      }
    },
    getProfile(data) {
      const headers = {
        Authorization: `Bearer ${data.access_token}`,
      };
      this.$store.commit("SET_TOKEN", data.access_token);
      this.$axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: headers,
        })
        .then((response) => {
          const userdata = JSON.stringify(response.data);
          this.$store.commit("SET_LOGIN", userdata);
        });
      this.$router.push("/profile");
    },
  },
};
</script>
