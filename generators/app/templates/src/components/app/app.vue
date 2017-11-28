<script>
  import Vue from 'vue';

  // @vue/component
  export default Vue.extend({
    name: 'app',
  });
</script>

<style lang="scss">
  @import "~Styles/reset";
  @import "~Styles/fonts";
  @import "~Styles/variables";

  html {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  body {
      height: 100%;
  }

  [v-cloak] {
      display: none;
  }
</style>

<template>
  <main
    id="viewport"
    role="document">
    <router-view />
  </main>
</template>
