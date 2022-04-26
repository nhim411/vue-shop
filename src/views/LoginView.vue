<template>
  <div class="login-view text-center">
    <b-form class="form-signin" @submit.prevent="onLogin">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <b-form-input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        v-model="form.email"
        required
        autofocus
      ></b-form-input>
      <label for="inputPassword" class="sr-only">Password</label>
      <b-form-input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      ></b-form-input>
      <div class="checkbox mb-3"></div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
      </button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
  methods: {
    onLogin() {
      this.$store.dispatch("getUserLogin", this.form.email).then(() => {
        if (this.$store.state?.user) {
          this.globalAlert(
            `đăng nhập thành công,Chào ${this.$store.state.user.name.firstname} ${this.$store.state.user.name.lastname}`
          );
          this.$router.push({ name: "CartView" });
        } else {
          this.globalAlert("Đăng nhập thất bại", "danger");
        }
      });
    },
  },
};
</script>

<style scoped>
.login-view {
  height: 100%;
}

.login-view {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
