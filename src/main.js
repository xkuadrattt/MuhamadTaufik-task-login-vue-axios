import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import axiosInit from "./api";
import cookie from "js-cookie";
import "bootstrap/dist/css/bootstrap.css";

if (cookie.getJSON("userdata") !== undefined) {
  let auth = cookie.getJSON("userdata");
  store.commit("SET_LOGIN", auth);
  axiosInit.interceptors.request.use((config) => {
    const token = store.state.token;
    token
      ? (config.headers["Authorization"] = `Bearer ${auth.access_token}`)
      : delete config.headers["Authorization"];
    return config;
  });
  (error) => Promise.reject(error);
}

const app = createApp(App);

app.config.globalProperties.$axios = { ...axiosInit };
app.use(router);
app.use(store);
app.mount("#app");
