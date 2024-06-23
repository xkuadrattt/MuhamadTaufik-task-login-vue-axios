<template>
  <table class="table css-table">
    <thead class="table-info">
      <tr>
        <th scope="col">No</th>
        <th scope="col">Images</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dataProduct" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td><img :src="item.image" alt="image" class="w-60" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item["category name"] }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </table>
  <span v-if="isLoading">Data sedang dimuat. Terima kasih sudah menunggu</span>
</template>

<script>
// import Cookies from "js-cookie";

export default {
  data() {
    return {
      dataProduct: [],
      isLoading: true,
    };
  },
  methods: {
    getListDataProduct() {
      this.$axios.get("products?offset=0&limit=5").then((response) => {
        let dataTable = response.data;
        console.log(dataTable);
        dataTable.forEach((item) => {
          this.dataProduct.push({
            name: item.title,
            image: item.category.image,
            description: item.description,
            "category name": item.category.name,
            price: item.price,
            images: item.images[0].replace(
              /[~`!@#$%^&*()+={}\[\];\'\"<>,\\\\?-_]/g,
              ""
            ),
          });
        });
        this.isLoading = !this.isLoading;
      });
    },
  },
  mounted() {
    this.getListDataProduct();
  },
};
</script>
