<template>
  <div id="app">
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Githubber
          </h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="section">
        <GitHub msg="stars" />
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
