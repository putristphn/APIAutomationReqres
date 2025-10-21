const chai = require("chai");
const expect = chai.expect;

describe("PATCH - Update user", function () {
  it("should update user job successfully", async function () {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      },
      body: JSON.stringify({
        name: "morpheus",
        job: "zion resident"
      })
    });

    const data = await response.json();

    expect(response.status).to.equal(200);
    expect(data.name).to.equal("morpheus");
    expect(data.job).to.equal("zion resident");
    expect(data).to.have.property("updatedAt");
  });
});