<template>
  <div class="">
    <b-container class="cart-view my-3">
      <ProductOfCart
        v-for="cart in carts"
        :key="cart.id"
        :cart="cart"
      ></ProductOfCart>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductOfCart from "@/views/ProductOfCart";
export default {
  computed: {
    ...mapGetters({ carts: "getCarts" }),
  },
  components: { ProductOfCart },
  created() {
    this.$store.dispatch("fetchProducts").then(() => {
      this.products = this.$store.getters.getProducts;
      this.$store.dispatch("fetchCarts");
    });
  },
};
</script>

<style></style>
