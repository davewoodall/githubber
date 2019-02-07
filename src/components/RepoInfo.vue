<template>
  <div class="repo-info">
    <div class="card card-equal-height">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="avatar" alt="repo avatar" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              <a :href="html_url" target="_blank">
                {{ name }}
              </a>
            </p>
            <p class="subtitle is-6">Stars: {{ star_count }}</p>
          </div>
        </div>

        <div class="content">
          {{ description }}
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoInfo",
  props: {
    repo: {
      stargazers_count: String,
      name: String,
      description: String,
      html_url: String,
      owner: {
        avatar_url: String
      }
    }
  },
  computed: {
    star_count() {
      return this.repo.stargazers_count;
    },
    html_url() {
      return this.repo.html_url;
    },
    name() {
      return this.repo.name;
    },
    description() {
      return this.repo.description;
    },
    avatar() {
      return this.repo.owner.avatar_url;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="css" scoped>
  .card-equal-height {
   display: flex;
   flex-direction: column;
   height: 100%;
}
</style>
