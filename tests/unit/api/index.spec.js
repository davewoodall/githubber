import { expect } from "chai";
import sinon from "sinon";
import API from "@/api/base/";
import axios from "axios";

describe("HTTP wrapper", () => {
  let stub;
  let path;

  beforeEach(() => {
    stub = sinon.stub(axios, "get");
    path = "www.example.com";
  });

  afterEach(() => {
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith(path)).to.be.true;
    stub.restore();
  });

  it("Send requests through axios", function() {
    API.get(path);
  });
});
