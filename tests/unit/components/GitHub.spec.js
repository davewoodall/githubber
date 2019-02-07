import { expect } from "chai";
import sinon from "sinon";
import { shallowMount } from "@vue/test-utils";
import Github from "@/components/GitHub.vue";
import GitubRepo from "@/api/GithubRepo";

describe("Components / Github", () => {
  let msg;
  let wrapper;
  let stub;
  beforeEach(() => {
    msg = "stars";
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

  it("makes calls to github stars", function() {
    expect(wrapper.vm.query).to.equal("stars");
  });
});
