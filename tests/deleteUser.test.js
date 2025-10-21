const { expect } = require("chai");

describe("DELETE - Delete user", function () {
  it("should return 204 with empty body", async function () {
    const res = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "x-api-key": "reqres-free-v1"
      }
    });

    const text = await res.text();     // 204 => empty string
    expect(res.status).to.equal(204);
    expect(text).to.equal("");
  });
});