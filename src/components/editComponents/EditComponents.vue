<template>
  <form @submit.prevent="putData" class="shadow-lg p-4 bg-light rounded">
    <h2 class="text-center mb-4">Edit Product</h2>
    <div class="mb-3">
      <label for="id" class="form-label">ID</label>
      <input type="text" id="id" v-model="id" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="titleProduct" class="form-label">Title</label>
      <input
        type="text"
        id="titleProduct"
        placeholder="Title product"
        v-model="title"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label for="price" class="form-label">Price</label>
      <input
        type="text"
        id="price"
        placeholder="Price"
        v-model="price"
        class="form-control"
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        id="description"
        v-model="description"
        class="form-control"
      ></textarea>
    </div>
    <button class="btn btn-primary w-100" type="submit">Edit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      price: "",
      id: this.$route.query.id,
      description: "",
      //   img: "",
    };
  },
  methods: {
    previewedFiles(event) {
      this.images = event.target.files;
    },
    getData() {
      this.$axios.get(`/products/${this.$route.query.id}`).then((response) => {
        let data = response.data;
        this.title = data.title;
        this.price = data.price;
        this.description = data.description;
        // this.img = data.images[0];
      });
    },
    putData() {
      this.$axios
        .put(`/products/${this.$route.query.id}`, {
          id: this.$route.query.id,
          title: this.title,
          price: this.price,
          description: this.description,
          categoryId: this.$route.query.categoryId,
          images: ["https://i.imgur.com/Y54Bt8J.jpeg"],
        })
        .then((response) => {
          if (response.statusText === "OK") {
            console.log("input data berhasil", response);
            this.$router.push("/");
          }
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
