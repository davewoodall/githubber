<template>
  <section>
    <h1 class="title">{{ msg }}</h1>
    <div class="columns">
      <div class="column is-one-third">
        <p class="subtitle">
          Query the github repo api with the following information.
        </p>
        <form class="box">
          <div class="field level">
            <div class="level-left">
              <label class="label">
                order
                <span class="control">
                  <input
                    class="checkbox"
                    type="checkbox"
                    v-model="order"
                    :placeholder="order"
                  />
                </span>
              </label>
            </div>
            <p class="level-right">
              <i>
                <span>View in&nbsp;</span>
                <b v-if="order">de</b>
                <b v-else>as</b>
                <span>cending&nbsp;order</span>
              </i>
            </p>
          </div>

          <div class="field">
            <label class="label">repo size limit</label>
            <div class="field-body">
              <p class="control">
                <input
                  v-model="limit"
                  class="input"
                  type="email"
                  placeholder="10"
                />
              </p>
            </div>
          </div>
          <nav class="level">
            <div class="level-left"></div>
            <div class="level-right">
              <div class="level-item">
                <input
                  class="button is-primary"
                  type="button"
                  @click.prevent="submitForm"
                  value="get repos"
                />
              </div>
            </div>
          </nav>
        </form>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <repo-info
            class="column is-one-third"
            v-for="repo in repoCollection"
            :repo="repo"
            :key="repo.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GitubRepo from "@/api/GithubRepo";
import RepoInfo from "@/components/RepoInfo";
export default {
  components: {
    RepoInfo
  },
  props: {
    msg: String
  },
  data() {
    return {
      query: this.msg,
      repos: { data: { items: [] } },
      order: false,
      limit: ""
    };
  },
  computed: {
    repoCollection() {
      this.repos = this.repos.data.items;
      return this.repos;
    }
  },
  methods: {
    submitForm() {
      this.getRepos();
    },
    async getRepos() {
      this.repos = await GitubRepo.getRepoBy(
        this.query,
        this.order,
        this.limit
      );
    }
  }
};
</script>

<style type="text/css">
.box {
  max-height: 300px;
}
</style>
