<template>
  <b-col sm="12" md="4" lg="3">
    <b-card class="mb-4 box-shadow">
      <b-card-img
        width="100%"
        height="225"
        :src="imgSrc"
        style="object-fit: contain"
      >
      </b-card-img>

      <b-card-title :title="title" title-tag="h5"></b-card-title>
      <b-card-text class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <div
        class="card-footer-wrapper d-flex justify-content-between align-items-center"
      >
        <p class="mr-auto d-block text-center mb-0">
          {{ $t("price", { number: price }) }}
        </p>
        <b-button variant="primary" @click="addProductToCart(productId)">{{
          $t("buy")
        }}</b-button>
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: ["title", "imgSrc", "price", "productId"],
  methods: {
    addProductToCart(productId) {
      if (!this.$store.state.user) {
        this.globalAlert("Bạn chưa đăng nhập", "danger");
        return;
      }
      this.$store.dispatch("addProductToCart", productId);
    },
  },
};
</script>

<style scoped>
.card-text {
  --line-height: 2rem;
  line-height: var(--line-height);
  max-height: calc(var(--line-height) * 2);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card-title {
  --line-height: 2rem;
  line-height: var(--line-height);
  max-height: calc(var(--line-height) * 2);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
</style>
