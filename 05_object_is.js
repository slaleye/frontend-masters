// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
  Object.is = function ObjectIs(firstValue, secondValue) {
    let firstValueIsNegativeZero = isNegativeZero(firstValue);
    let secondValueIsNegativeZero = isNegativeZero(secondValue);

    // check if either one of the values are NEgative zeros

    if (firstValueIsNegativeZero || secondValueIsNegativeZero) {
      return firstValueIsNegativeZero && secondValueIsNegativeZero;
    } else if (isNaN(firstValue) && isNaN(secondValue)) {
      return true;
    } else {
      return firstValue === secondValue;
    }
    //*****************

    function isNegativeZero(value) {
      // 1 / -0 returns -Infinity(built-in identifier in JS)
      return value == 0 && 1 / value == -Infinity;
    }
    // NaN is the only value in JS that is not equal to itself
    function isNaN(value) {
      return value !== value;
    }
  };
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
