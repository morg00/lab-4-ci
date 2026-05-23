const assert = require("node:assert/strict");
const { add, countWords, isPalindrome, titleCase } = require("../src/utils");

describe("utils", () => {
  it("adds two numbers", () => {
    assert.equal(add(7, 5), 12);
  });

  it("detects palindromes ignoring spaces and punctuation", () => {
    assert.equal(isPalindrome("А роза упала на лапу Азора"), true);
    assert.equal(isPalindrome("docker"), false);
  });

  it("counts words in a text", () => {
    assert.equal(countWords("GitHub Actions запускает тесты"), 4);
  });

  it("formats text as title case", () => {
    assert.equal(titleCase("node JS ci PIPELINE"), "Node Js Ci Pipeline");
  });
});
