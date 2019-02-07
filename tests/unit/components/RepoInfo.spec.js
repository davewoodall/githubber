import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import RepoInfo from "@/components/RepoInfo.vue";

describe("Components / RepoInfo", () => {
  let repo;
  let wrapper;
  beforeEach(() => {
    repo = {
      stargazers_count: 25,
      name: "My Repo",
      description: "This is my repo",
      html_url: "http://www.example.com",
      owner: {
        avatar_url: "http://www.example.com/avatar_url"
      }
    };
    wrapper = shallowMount(RepoInfo, {
      propsData: { repo }
    });
  });
  it("Renders ome props as Text", () => {
    expect(wrapper.text()).to.include(repo.name);
    expect(wrapper.text()).to.include(repo.stargazers_count);
    expect(wrapper.text()).to.include(repo.description);
  });
  it("Provides some props as HTML", () => {
    expect(wrapper.html()).to.include(repo.html_url);
    expect(wrapper.html()).to.include(repo.owner.avatar_url);
  });
});
