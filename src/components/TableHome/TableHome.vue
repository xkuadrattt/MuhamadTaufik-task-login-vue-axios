<template>
  <div class="container my-5">
    <table class="table css-table table-hover">
      <thead class="table-success">
        <tr>
          <th scope="col">No</th>
          <th scope="col">Images</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataProduct" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>
            <img
              :src="item.image"
              alt="image"
              class="img-thumbnail"
              style="width: 60px; height: auto"
            />
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item["category name"] }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button
              class="btn btn-sm btn-primary me-2"
              @click="handleEdit(item)"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="isLoading" class="text-center my-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p>Data sedang dimuat. Terima kasih sudah menunggu</p>
    </div>
  </div>
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
      this.$axios.get("products?offset=0&limit=10").then((response) => {
        let dataTable = response.data;
        console.log(dataTable);
        dataTable.forEach((item) => {
          this.dataProduct.push({
            name: item.title,
            image: item.category.image,
            description: item.description,
            "category name": item.category.name,
            price: item.price,
            categoryId: item.category?.id,
            id: item.id,
          });
        });
        this.isLoading = !this.isLoading;
      });
    },
    handleEdit(item) {
      this.$router.push(
        `/editPage/?id=${item.id}&categoryId=${item.categoryId}`
      );
    },
  },
  mounted() {
    this.getListDataProduct();
  },
};
</script>
