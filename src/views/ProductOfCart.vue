<template>
  <section class="my-5">
    <p>
      Mã đơn: {{ cart.id }}, Ngày mua:
      {{ new Date(cart.date).toLocaleDateString("en-US") }}
    </p>
    <ProductOfCartItem
      v-for="product in cart.products"
      :key="product.id"
      :product="product"
    ></ProductOfCartItem>
  </section>
</template>

<script>
import ProductOfCartItem from "@/views/ProductOfCartItem";

export default {
  props: ["cart"],
  components: { ProductOfCartItem },
};
</script>

<style scoped></style>
