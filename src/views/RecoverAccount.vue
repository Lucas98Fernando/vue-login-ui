<template>
  <b-container id="mainContainer" align-v="center">
    <b-row align-v="center" align-h="center">
      <b-col md="6">
        <FormRecover />
      </b-col>
      <b-col md="6">
        <b-img
          src="../assets/images/business-coffee.png"
          fluid
          class="businessImg"
          center
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FormRecover from "../components/FormRecover";

export default {
  components: {
    FormRecover,
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
