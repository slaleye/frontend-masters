"use strict";

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, numbers) {
  if (!numbers.includes(num)) {
    numbers = [...numbers, num]; // avoid changing the list
    numbers.sort(function asc(x, y) {
      return x - y;
    }); // force numerical sorting
  }
  return numbers;
}

var luckyLotteryNumbers = [];
const NUM_COUNT = 6;

while (luckyLotteryNumbers.length < NUM_COUNT) {
  luckyLotteryNumbers = pickNumber(
    lotteryNum(),
    Object.freeze(luckyLotteryNumbers)
  ); // Tells the user it's not being reassigned in pickNumber
}

console.log(luckyLotteryNumbers);
