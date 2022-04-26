<template>
  <div>
    <div class="loading-img" v-if="loading">
      <img :src="require(`@/assets/loading.gif`)" alt="loading" />
    </div>
    <b-row class="my-2" v-else>
      <ProductItem
        v-for="product in products"
        v-bind:title="product.title"
        v-bind:imgSrc="product.image"
        v-bind:key="product.id"
        v-bind:id="product.id"
        v-bind:price="product.price"
      ></ProductItem>
    </b-row>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  components: { ProductItem },
  computed: {},
  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => {
      this.products = this.$store.getters.getProducts;
      this.loading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-img img {
  max-width: 400px;
}
</style>
