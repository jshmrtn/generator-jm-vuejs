<script>
  import Vue from "vue";

  // @vue/component
  export default Vue.extend({
    name: "index",
    data() {
      return {
        message: "Index Message"
      };
    }
  });
</script>

<style module lang="scss">
  @import "~Styles/variables.scss";
</style>

<template>
  <h1>{{ message }}</h1>
</template>
