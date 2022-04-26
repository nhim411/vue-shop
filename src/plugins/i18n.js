import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    welcomeMsg: "Welcome to Your Vue.js App",
    carts: "Cart",
    products: "Products",
    user: "User",
    signOut: "Sign Out",
    lang: "Lang",
    profile: "Profiles",
    buy: "Buy",
    price: "Price: {number} $",
  },
  vi: {
    welcomeMsg: "Chào mừng đến với ứng dụng Vue.js của bạn",
    carts: "Giỏ hàng",
    products: "Sản phẩm",
    user: "Tài khoản",
    signOut: "Đăng xuất",
    lang: "Ngôn ngữ",
    profile: "Thông tin tài khoản",
    buy: "Mua ngay",
    price: "Giá: {number} $",
  },
};

const i18n = new VueI18n({
  locale: "vi", // set locale
  fallbackLocale: "vi", // set fallback locale
  messages, // set locale messages
});

export default i18n;
