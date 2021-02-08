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
  data() {},
};
</script>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  min-height: 100vh;
  /* background: linear-gradient(to right, #41b883, #83c5be); */
  /* background: url('./assets/images/bg.jpg'); */
  background: linear-gradient(
      to bottom,
      rgba(65, 184, 131, 0.7) 0%,
      rgba(131, 197, 190, 0.7) 100%
    ),
    url("./assets/images/bg.jpg");
  background-position: center;
  background-size: cover;
  padding: 30px 0 0;
}
</style>
