<template>
  <form @submit.prevent="putData">
    <div class="id">
      <label for="id">id</label>
      <input type="text" id="id" v-model="id" />
    </div>
    <div class="titleproduct">
      <label for="titleProduct">Title</label>
      <input
        type="text"
        id="titleProduct"
        placeholder="title product"
        v-model="title"
      />
    </div>
    <div class="price">
      <label for="price">Price</label>
      <input type="text" id="price" placeholder="price" v-model="price" />
    </div>
    <div class="description">
      <label for="description">Description</label>
      <textarea id="description" v-model="description"></textarea>
    </div>
    <!-- <div class="images">
      <img :src="img" alt="img" class="w-60" />
    </div> -->
    <button>Edit</button>
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
