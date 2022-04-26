import Vue from "vue";
import Vuex from "vuex";
import productApi from "@/api/productApi";
import cartApi from "@/api/cartApi";
import userApi from "@/api/userApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    userId: null,
    user: null,
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCarts(state) {
      return state.carts;
    },
    getProductById(state) {
      return function (id) {
        return state.products.find((product) => product.id === id);
      };
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCarts(state, carts) {
      state.carts = carts;
    },
    setUser(state, user) {
      state.user = user;
    },
    logOut(state) {
      state.user = null;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      let data = await productApi.getAll();
      commit("setProducts", data);
    },
    async fetchCarts({ commit, state }) {
      let userId = state.user.id;
      let data = await cartApi.getCartOfUser({ userId: userId });
      commit("setCarts", data);
    },
    async getUserLogin({ commit }, userEmail) {
      try {
        const params = { email: userEmail };
        const response = await userApi.getUserByEmail(params);
        if (response && response.length > 0) {
          commit("setUser", response[0]);
          console.log("đăng nhập thành công");
        } else {
          console.log("đăng nhập lỗi, email:", userEmail);
        }
      } catch (e) {
        console.log("can not get userLogin", e);
      }
    },
    async addProductToCart({ commit, state }, userEmail) {
      if (!state.user) throw new Error("Bạn chưa đăng nhập");
      try {
        const params = { email: userEmail };
        const response = await userApi.getUserByEmail(params);
        if (response && response.length > 0) {
          commit("setUser", response[0]);
          console.log("đăng nhập thành công");
        } else {
          console.log("đăng nhập lỗi, email:", userEmail);
        }
      } catch (e) {
        console.log("can not get userLogin", e);
      }
    },
  },
  modules: {},
});
