<template>
  <div id="app">
    <NavView />
    <router-view />
    <!-- <FooterView /> -->
  </div>
</template>
<script>
import NavView from "@/views/NavView";
// import FooterView from "@/views/FooterView";
export default {
  components: { NavView },
};
</script>

<style lang="scss"></style>
