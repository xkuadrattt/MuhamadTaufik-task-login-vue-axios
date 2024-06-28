<template>
  <section class="custom-grid">
    <div
      class="card shadow-lg"
      style="width: 18rem"
      v-for="item in dataProduct"
      :key="item.id"
    >
      <img :src="item.image" class="card-img-top" alt="img" />
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">{{ item.description }}</p>
        <p class="card-text">${{ item.price }}</p>
        <a href="#" class="btn btn-success">Buy</a>
      </div>
    </div>
  </section>
  <div v-if="isLoading" class="text-center my-4">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <p>Data sedang dimuat. Terima kasih sudah menunggu</p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();
const dataProduct = computed(() => store.state.dataProduct);
const isLoading = computed(() => store.state.isLoading);

onMounted(() => {
  store.dispatch("fetchDataProducts");
});
</script>
