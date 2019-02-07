import { expect } from "chai";
import sinon from "sinon";
import { shallowMount } from "@vue/test-utils";
import Github from "@/components/GitHub.vue";
import GitubRepo from "@/api/GithubRepo";

describe("Github", () => {
  let msg;
  let wrapper;
  let stub;
  beforeEach(() => {
    msg = "hello Brightwheel!";
    wrapper = shallowMount(Github, {
      propsData: { msg }
    });
    stub = sinon.stub(GitubRepo, "getRepoBy").returns("blah!");
  });
  afterEach(() => {
    stub.restore();
  });
  it("Renders Props", () => {
    expect(wrapper.text()).to.include(msg);
  });

  it("makes calls to github", function() {
    wrapper.setData({ query: "stars" });
    expect(wrapper.vm.getRepos()).to.be.true;
    expect(wrapper.vm.query).to.equal("stars");
  });
});
