import { createStore } from "vuex";
const store = createStore({
  state: {
    userdata: null,
  },
  getters: {},
  mutations: {
    SET_LOGIN(state, payload) {
      state.userdata = payload;
      console.log("state userdata =", state.userdata);
    },
  },
  actions: {},
});

export default store;
