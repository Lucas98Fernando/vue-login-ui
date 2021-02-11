<template>
  <b-container id="mainContainer" align-v="center">
    <BlobBg />
    <b-row align-v="center" align-h="center">
      <b-col md="6">
        <FormRegister />
      </b-col>
      <b-col md="6">
        <b-img
          src="../assets/images/business-like.png"
          fluid
          class="businessImg scale-in-bottom"
          center
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FormRegister from "../components/FormRegister";
import BlobBg from "../components/BlobBg";

export default {
  components: {
    FormRegister,
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
