<template>
  <b-container fluid>
    <b-row>
      <nav class="nav">
        <b-navbar toggleable="lg" type="dark" variant="primary">
          <b-navbar-brand href="/">Vue Shop</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <router-link class="nav-link" :to="{ name: 'CartView' }">
                  {{ $t("carts") }}
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link class="nav-link" :to="{ name: 'ProductView' }">
                  {{ $t("products") }}
                </router-link>
              </b-nav-item>
              <b-nav-item>
                <!-- <router-link class="nav-link" :to="{ name: 'LoginView' }">
                  {{ $t("login") }}
                </router-link> -->
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item v-if="$store.state.user"
                >Xin chào, {{ $store.state.user.name.firstname }}</b-nav-item
              >
              <b-nav-item-dropdown :text="$t('lang')" right>
                <b-dropdown-item href="#" @click="changeLocale('en')"
                  >EN</b-dropdown-item
                >
                <b-dropdown-item href="#" @click="changeLocale('vi')"
                  >VN</b-dropdown-item
                >
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>{{ $t("user") }}</em>
                </template>
                <b-dropdown-item href="#">{{ $t("profile") }}</b-dropdown-item>
                <b-dropdown-item @click="logOut" href="#">{{
                  $t("signOut")
                }}</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </nav>
    </b-row>
  </b-container>
</template>

<script>
import i18n from "@/plugins/i18n";

export default {
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    logOut() {
      this.$store.commit("logOut");
      this.$router.push({ name: "ProductView" });
      this.globalAlert("Bạn đã đăng xuất");
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
