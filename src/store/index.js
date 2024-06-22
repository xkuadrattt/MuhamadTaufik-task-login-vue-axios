import Cookies from "js-cookie";
import { createStore } from "vuex";
export default createStore({
  state: {
    userdata: null,
    user: null,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOGIN(state, payload) {
      state.userdata = payload;
    },
    SET_LOGOUT(state) {
      state.userdata = null;
      state.user = null;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
