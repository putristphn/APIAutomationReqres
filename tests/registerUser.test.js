const chai = require("chai");
const expect = chai.expect;

describe("POST - Register user", function () {
  it("should register a user successfully and return id & token", async function () {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "pistol"
      })
    });

    const data = await response.json();

    expect(response.status).to.equal(200);
    expect(data).to.have.property("id");
    expect(data).to.have.property("token");
  });
});