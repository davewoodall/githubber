import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Github from "@/components/GitHub.vue";

describe("Github", () => {
  it("Renders Props", () => {
    const msg = "hello Brightwheel!";
    const wrapper = shallowMount(Github, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
