const chai = require("chai");
const expect = chai.expect;

describe("GET - Retrieve user", function () {
  it("should return user data with status 200", async function () {
    const response = await fetch("https://reqres.in/api/users/2");
    const data = await response.json();

    expect(response.status).to.equal(200);
    expect(data.data).to.have.property("id");
    expect(data.data).to.have.property("email");
  });
});