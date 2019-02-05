<template>
  <div id="app">
    <div class="container">
      <div class="section">
        <GitHub msg="hello, Brightwheel!" />
      </div>
    </div>
  </div>
</template>

<script>
import GitHub from "./components/GitHub.vue";

export default {
  name: "app",
  components: {
    GitHub
  }
};
</script>

<style lang="scss">
@import "bulma";
</style>
