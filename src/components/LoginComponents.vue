<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <form
      @submit.prevent="handleSubmit"
      class="form-input p-4 border rounded shadow-lg bg-white"
      style="max-width: 400px; width: 100%"
    >
      <h2 class="text-center mb-4">Login</h2>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          placeholder="Masukan Email yang valid"
          v-model="email"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button class="btn btn-primary w-100" type="submit">Login</button>
    </form>
  </div>
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
        .post("/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.getDataUser(response.data);
        });
    },
    getDataUser(data) {
      this.$axios
        .get("auth/profile", {
          headers: {
            Authorization: "Bearer " + data.access_token,
          },
        })
        .then((res) => {
          let userdata = Object.assign(res.data, data);
          let forcookie = JSON.stringify(userdata);
          cookie.set("userdata", forcookie, { expires: 1 });
          this.$store.commit("SET_LOGIN", forcookie);
          this.$router.push({ path: "/" });
        });
    },
  },
};
</script>
