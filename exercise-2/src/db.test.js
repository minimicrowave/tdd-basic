import { expect } from "chai";
import { getUserByUsername } from "./db";
import { getDbData, setDbData, resetDb } from "./test-helpers";
import { it } from "mocha";

describe("getUserByUsername()", () => {
  afterEach("reset database", async () => {
    await resetDb();
  });

  it("should get the correct user from db given a username", async () => {
    const fakeData = [
      { id: "123", username: "abc", email: "abc@email.com" },
      { id: "456", username: "def", email: "def@email.com" },
    ];
    const expected = fakeData[0];

    await setDbData("users", fakeData);

    const actual = await getUserByUsername("abc");
    const final = await getDbData("users");

    expect(actual).excludingEvery("_id").to.deep.equal(expected);
    expect(final).excludingEvery("_id").to.deep.equal(fakeData);
  });

  it("should return null when the user is not found", async () => {
    const fakeData = [
      { id: "123", username: "abc", email: "abc@email.com" },
      { id: "456", username: "def", email: "def@email.com" },
    ];

    await setDbData("users", fakeData);

    const actual = await getUserByUsername("test");

    expect(actual).to.be.null;
  });
});
