import axiosInit from "@/api";
import { createStore } from "vuex";
export default createStore({
  state: {
    userdata: null,
    dataProduct: [],
    isLoading: false,
  },
  getters: {},
  mutations: {
    SET_LOGIN(state, payload) {
      state.userdata = payload; //parameter payload muncul dari LoginComponents response fetchData userdata
    },
    SET_LOGOUT(state) {
      state.userdata = null;
    },
    SET_PRODUCTS(state, products) {
      state.dataProduct = products;
    },
    SET_LOADING(state, boolean) {
      state.isLoading = boolean;
    },
  },
  actions: {
    async fetchDataProducts(context) {
      context.commit("SET_LOADING", true);
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
      context.commit("SET_LOADING", false);
    },
  },
});
