import { expect } from "chai";
import sinon from "sinon";
import API from "@/api/base/"; // _dw Mock this
import GithubRepo from "@/api/GithubRepo";

describe("getRepoBy", () => {
  it("sends a request", function() {
    let stub = sinon.stub(API, "get").returns("foo");
    const query = "stars";
    GithubRepo.getRepoBy(query);
    expect(stub.calledOnce).to.be.true;
  });
});
