"use strict";

// When using closure make sure we are closing over non mutating values
function strBuilder(str) {
  // keep track of the string
  return function next(v) {
    if (typeof v == "string") {
      return strBuilder(str + v);
    }
    return str;
  };
}

var hello = strBuilder("Hello, ");
var sal = hello("Sal");
var aliz = hello("Aliz");
var question = sal("?")();
var greeting = aliz("!")();

console.log(strBuilder("Hello, ")("")("Sal")(".")("")() === "Hello, Sal.");
console.log(hello() === "Hello, ");
console.log(sal() === "Hello, Sal");
console.log(aliz() === "Hello, Aliz");
console.log(question === "Hello, Sal?");
console.log(greeting === "Hello, Aliz!");
