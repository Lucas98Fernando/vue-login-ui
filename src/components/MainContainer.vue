<template>
  <b-container id="mainContainer" align-v="center">
    <b-row align-v="center" align-h="center">
      <b-col md="6">
        <FormLogin />
      </b-col>
      <b-col md="6">
        <b-img
          src="../assets/images/business.png"
          fluid
          class="businessImg"
          center
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FormLogin from "./FormLogin";

export default {
  components: {
    FormLogin,
  },
};
</script>

<style>
#mainContainer {
  width: 100%;
  height: auto;
}
</style>
