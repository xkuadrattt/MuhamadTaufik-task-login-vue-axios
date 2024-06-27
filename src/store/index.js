import axiosInit from "@/api";
import { createStore } from "vuex";
export default createStore({
  state: {
    userdata: null,
    dataProduct: [],
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
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchDataProducts(context) {
      let response = await axiosInit.get("products?offset=0&limit=10");
      let dataTable = response.data;
      console.log(dataTable);
      dataTable.forEach((item) => {
        context.store.state.dataProduct.push({
          name: item.title,
          image: item.category.image,
          description: item.description,
          "category name": item.category.name,
          price: item.price,
          categoryId: item.category?.id,
          id: item.id,
        });
      });
    },
  },
});
