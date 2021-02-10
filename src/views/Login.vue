<template>
  <b-container id="mainContainer" align-v="center">
    <BlobBg />
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
import FormLogin from "../components/FormLogin";
import BlobBg from "../components/BlobBg";

export default {
  components: {
    FormLogin,
    BlobBg
  },
};
</script>

<style lang="scss">
#mainContainer {
  width: 100%;
  height: auto;
  position: relative;
}
</style>
