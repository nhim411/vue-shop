<template>
  <b-row>
    <b-media tag="li" class="border w-100">
      <template #aside>
        <b-img
          :src="productById.image"
          width="40"
          alt="placeholder"
          class="product-item"
        ></b-img>
      </template>
      <h5 class="mt-0 mb-1">{{ productById.title }}</h5>
      <p class="mb-1">
        {{ productById.description }}
      </p>
      <p class="mb-0">Số lượng: {{ product.quantity }}</p>
    </b-media>
  </b-row>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    productById() {
      return this.$store.getters.getProductById(this.product.productId);
    },
  },
};
</script>

<style scoped>
.media-aside {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center !important;
  padding: 0 10px;
  margin: 0;
}
</style>
