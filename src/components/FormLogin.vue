<template>
  <div>
    <b-card id="cardLogin">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="formLogin">
        <!-- <h1 class="text-center mb-4">Login</h1> -->
        <b-img src="../assets/images/logo.png" fluid class="logoLogin mb-4" />
        <b-form-group id="input-group-1" label-for="email">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="E-mail"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="passord"
            v-model="form.name"
            placeholder="Senha"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <a href="#" class="forgotPassord text-center">Esqueceu a senha ?</a>

        <div class="d-flex justify-content-center mt-4">
          <b-button type="submit" variant="primary" class="btn-login"
            >Entrar</b-button
          >
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
#cardLogin {
  border-radius: 15px;
  box-shadow: 0px 0px 10px #999;
}

#formLogin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

.logoLogin {
  margin: 0 auto;
  width: 100px;
}

.forgotPassword {
  color: #41b883 !important;
  text-decoration: none !important;
}

.btn-login {
  width: 200px;
  background-color: #41b883 !important;
  border: none !important;
  padding: 5px 10px !important;
  font-size: 1.3rem !important;
  font-weight: 600 !important;
}
</style>