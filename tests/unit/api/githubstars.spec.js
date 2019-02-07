import { expect } from "chai";
import sinon from "sinon";
import API from "@/api/base/";
import GithubRepo from "@/api/GithubRepo";
import starFixture from "../../fixtures/stars2.json";

describe("API/GithubRepo", () => {
  let stub;

  beforeEach(() => {
    stub = sinon.stub(API, "get").returns(starFixture);
  });

  afterEach(() => {
    expect(stub.calledOnce).to.be.true;
    stub.restore();
  });

  it("getRepoBy stars", async function() {
    const response = await GithubRepo.getRepoBy("stars");
    expect(stub.calledOnce).to.be.true;
    expect(response.items.length).to.equal(2);
  });
});
