<script>
  import Vue from "vue";

  // eslint-disable-next-line
  const context = require.context("Components/", true, /.vue$/);

  const components = context.keys().reduce((acc, name) => {
    const component = context(name).default;

    acc[component.extendOptions.name] = component;
    return acc;
  }, {});

  // @vue/component
  export default Vue.extend({
    name: "app",
    data() {
      return {
        currentComponent: null,
        currentComponentProps: null
      };
    },
    components: {
      ...components
    },
    methods: {
      changeComponent(newComponent, props) {
        this.currentComponent = newComponent;
        this.currentComponentProps = props;
      }
    },
    mounted() {
      window.changeComponent = (name, props) => {
        this.changeComponent(name, props);
      };
    }
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
    <component
      :is="currentComponent"
      v-bind="currentComponentProps"
    />
  </main>
</template>
