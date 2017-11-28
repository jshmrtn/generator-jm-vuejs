<script>
  import Vue from "vue";

  // @vue/component
  export default Vue.extend({
    name: "<%= props.componentName %>",
    data() {
      return {};
    }
  });
</script>

<style module lang="scss">
  @import "~Styles/variables.scss";
</style>
