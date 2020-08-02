"use strict";

// 1. Write two functions, each which return a fixed number (different from each other) when called.

// function eight() { return 8; }
// function eighteen() { return 18; }

// 2. Write an `add(..)` function that takes two numbers and adds them and returns the result.
// Call `add(..)` with the results of your two functions from (1) and print the result to the console.

 function add(num1, num2) { return num1 + num2; }
/*var res = add(eight(),eighteen()); // Composition
console.log(res); */

//3. Write an `add2(..)` that takes two functions instead of two numbers, and
// it calls those two functions and then sends those values to `add(..)`, just like you did in (2) above.
function add2(fn1, fn2) { return add(fn1(),fn2()); } // Higher Order add utility adds functions 
//var res2 = add2(eight,eighteen); // Composition
//console.log(res2);

// 4. Replace your two functions from (1) with a single function that takes a value and returns a function back, 
// where the returned function will return the value when it's called.
// constant: a function wrapped around a value
function constant(v) {
    return function f() {
        return v;
    }   
}
var eight = constant(8);
var eighteen = constant(18);

//5 Addn : iterative approach
/* function addn(...fns) {
    // when to stop the iteration
    while(fns.length > 2){
        let [fn0, fn1, ...rest] = fns;
        fns  = [
            function f() {
               return add2(fn0,fn1)
            },
            ...rest
        ]
    }
    return add2(fns[0], fns[1]); // Only need to do extra works when there are more functions
}
console.log(addn(constant(3),constant(7),constant(6),constant(4)));

*/

// Addn recursive
/* function addn([fn0, fn1, ...rest]) {
    if (rest.length == 0 ) {
        return add2(fn0,fn1) ; // Tail call position
    }
    
    return addn([
        function f(){
            return add2(fn0, fn1);
        },
        ...rest
    ]);
  
}
console.log(addn([constant(3),constant(7),constant(6),constant(4)])); */

// Reduce in Js it uses the first as inital and next one as second
function addn(fns) {
    return fns.reduce(function reducer(composedFn,fn){
        return function f() {
            return add2(composedFn,fn);
        }
    })(); // DO a final execution of the composed Functions to get result
  
}
console.log(addn([constant(3),constant(7),constant(6),constant(4)]));

// 6. Start with an array of odd and even numbers (with some duplicates),
// and trim it down to only have unique values.

var numbers = [1,47,15,2,365,41,74,1,18,15,544,544,1,55,4,8,47,2,47,54,78];

var uniqueNumbers = numbers.reduce(function unique(newList,num){
    if(!newList.includes(num)) {
        // newList.push(num); // Mutating NewList, instead of returning a new array
       // return newList.concat(num); // returns a new array with the value appended to the end of it
        return [...newList,num];
    }
    return newList;
},[]);

console.log(numbers);

console.log(uniqueNumbers);

// 7. Filter your array to only have even numbers in it.
var evenUniqueNmbers = uniqueNumbers.filter(function isEven(v){ return v % 2 == 0 ;});

console.log(evenUniqueNmbers);

// 8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).

var listFunction = evenUniqueNmbers.map(constant);

console.log(listFunction);

var sumN = addn(listFunction);

console.log(sumN);

debugger