import axiosInit from "@/api";
import { createStore } from "vuex";
export default createStore({
  state: {
    userdata: null,
    dataProduct: [],
    isLoading: true,
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
    SET_PRODUCTS(state, products) {
      state.dataProduct = products;
    },
    SET_LOADING(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    async fetchDataProducts(context) {
      let response = await axiosInit.get("products?offset=0&limit=10");
      let dataTable = response.data;
      const products = dataTable.map((item) => ({
        name: item.title,
        image: item.category.image,
        description: item.description,
        "category name": item.category.name,
        price: item.price,
        categoryId: item.category?.id,
        id: item.id,
      }));
      context.commit("SET_PRODUCTS", products);
      context.commit("SET_LOADING");
    },
  },
});
