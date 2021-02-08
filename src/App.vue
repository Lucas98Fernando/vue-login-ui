<template>
  <div id="app">
    <MainContainer />
  </div>
</template>

<script>
import MainContainer from "./components/MainContainer";

export default {
  name: "App",
  components: {
    MainContainer,
  },
  data() {
    return {
      images: {
        business: require("./assets/images/business.png"),
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background: linear-gradient(to right, #41b883, #83c5be);
  padding: 30px 0 0;
}
</style>
