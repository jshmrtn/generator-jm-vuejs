<script>
// @vue/component
export default {
  name: 'index',
  data() {
    return {
      message: 'Index Message'
    };
  }
};
</script>

<style module lang="scss">
  @import '~Styles/variables.scss';
</style>

<template>
  <h1>{{ message }}</h1>
</template>
