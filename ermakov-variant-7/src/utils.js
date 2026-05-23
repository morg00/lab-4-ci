function add(a, b) {
  return a + b;
}

function isPalindrome(value) {
  const normalized = String(value).toLowerCase().replace(/[^a-zа-я0-9]/gi, "");
  return normalized === normalized.split("").reverse().join("");
}

function countWords(text) {
  const words = String(text).trim().split(/\s+/).filter(Boolean);
  return words.length;
}

function titleCase(text) {
  return String(text)
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = {
  add,
  isPalindrome,
  countWords,
  titleCase
};
