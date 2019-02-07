# Githubber

A Vue SPA for interacting with the Github API. Current functionality focuses on viewing repos based on stars. But this application is built in a way that is easy for extension into other topics of interest. _(For Example, Query repos by language.)_

# View Live Demo

[view live demo](http://www.quickerleft.com)

# Test locally

Clone the repo then run the following commands;

```
  npm install
  npm run serve
  npm run test:unit
```

## Development process

**Step 1.** Created a BaseAPI `src/api/base` (and test `tests/unit/api/base` ) to separate [axios](https://github.com/axios/axios) library from our use case

**Step 2.** Created a specific `src/api/githubRepo` (and test `tests/unit/api/githubRepo`) that consumes `base` with a specific endpoint (`getRepoBy('stars')`) for the repos.

**Step 3.** Created a vue component `/src/components/GitHub` (and test `tests/components/api/GitHub`) which uses `githubRepo`. The specific use showing by `stars` is passed into the component in `App.vue` like so `<GitHub msg="stars" />`. At this repo, there is a form for influencing how many repos are returned, and in which sort order.

**Step 4.** Created second vue component `/src/components/RepoInfo` (and test `tests/components/api/RepoInfo`) which is the presentation of the repo response.

**Step 5.** Styled with [bulma](https://bulma.io/)

**Step 6.** Build and deploy to github static pages.
