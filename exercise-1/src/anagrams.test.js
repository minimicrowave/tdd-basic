import { expect } from "chai";
import { isAnagram } from "./anagrams";
import { it } from "mocha";

describe("isAnagram()", () => {
  it("should return true if 2 empty strings passed", () => {
    const actual = isAnagram("", "");
    expect(actual).to.be.true;
  });

  it("should return true if 2 same strings are passed", () => {
    const actual = isAnagram("a", "a");
    expect(actual).to.be.true;
  });

  it("should return false if 2 different strings are passed", () => {
    const actual = isAnagram("a", "b");
    expect(actual).to.be.false;
  });

  it("should return false if 2 different string of different length passed", () => {
    const actual = isAnagram("ab", "abb");
    expect(actual).to.be.false;
  });

  it("should ignore spaces in count", () => {
    const actual = isAnagram("a  b", "ab");
    expect(actual).to.be.true;
  });

  it("should ignore case", () => {
    const actual = isAnagram("STATE", "taste");
    expect(actual).to.be.true;
  });
});
