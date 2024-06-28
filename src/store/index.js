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
      //fetchdata dilakukan dalam actions karena akan dipakai lebih dari satu komponen. juga mengingat mutations harus berjalan sinkronus
      context.commit("SET_LOADING", true); //loading true sebelum fetch data 200
      let response = await axiosInit.get("products?offset=0&limit=10");
      let dataTable = response.data;
      const products = dataTable.map((item) => ({
        // nilai konstanta products adalah array baru dari map dataTable
        name: item.title,
        image: item.category.image,
        description: item.description,
        "category name": item.category.name,
        price: item.price,
        categoryId: item.category?.id,
        id: item.id,
      }));

      context.commit("SET_PRODUCTS", products);
      //products dimasukan dalam parameter supaya bisa diakses pada mutations
      context.commit("SET_LOADING", false);
      //akhirnya loading berakhir. terkadang masih muncul sedikit bug
    },
  },
});
