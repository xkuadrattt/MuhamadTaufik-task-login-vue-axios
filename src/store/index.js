import Cookies from "js-cookie";
import { createStore } from "vuex";
const store = createStore({
  state: {
    userdata: null,
    token: Cookies.get("token") || "",
  },
  getters: {
    isAuthenticated: (state) => state.token,
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.userdata = payload;

      Cookies.set("userdata", payload);
    },
    SET_LOGOUT(state) {
      state.userdata = null;
      state.token = "";
      Cookies.remove("token");
      Cookies.remove("userdata");
    },
    SET_TOKEN(state, token) {
      state.token = token;
      Cookies.set("token", token, { expires: 1 / 48 });
    },
  },
  actions: {},
});

export default store;
