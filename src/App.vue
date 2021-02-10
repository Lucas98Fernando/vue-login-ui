<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  min-height: 100vh;
  /* background: linear-gradient(to right, #41b883, #83c5be); */
  /* background: url('./assets/images/bg.jpg'); */
  background: linear-gradient(
      to bottom,
      rgba(65, 184, 131, 0.5) 0%,
      rgba(131, 197, 190, 0.5) 100%
    ),
    url("./assets/images/bg.jpg");
  background-position: center;
  background-size: cover;
  padding: 30px 0 0;
}
</style>
