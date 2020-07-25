"use strict";
// Recursive definition of a palindrome: if first and last character are equal
// and everthing in between has to be a palindrome
function isPalindrome(str) {
  if (str.length <= 1) return true; // base condition
  var first = str[0];
  var last = str[str.length - 1];
  if (first === last) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  return false;
}

console.log(isPalindrome("") === true);
console.log(isPalindrome("a") === true);
console.log(isPalindrome("aa") === true);
console.log(isPalindrome("aba") === true);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abccba") === true);
console.log(isPalindrome("ab") === false);
console.log(isPalindrome("abc") === false);
console.log(isPalindrome("abca") === false);
console.log(isPalindrome("abcdba") === false);
