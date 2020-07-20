"use strict"
//---------- Lazy Execution :Deferrred way
// closed on the variable count
/* function repeater(count) {
    return function allTheAs(){
        return "".padStart(count,"A"); 
    }
} 
var A = repeater(10);
// does the work at line 11 instead of line 5
// Lazy : deferring the work until that function gets called
// Good for expensive work
// When not sure if in all conditions the function will be called
// -- can be expensive every time it runs
console.log(A()); // AAAAAAAAA
console.log(A()); // AAAAAAAAA

*/

//---------- Eager Execution 
// DO it once and cache it
// Closing on the variable str
 function repeater(count) {
    var str = "".padStart(count,"A"); 
    return function allTheAs(){
        return str; 
    }
} 
var A = repeater(10);
// does the work once
// What if it never gets called

console.log(A()); // AAAAAAAAA
console.log(A()); // AAAAAAAAA


function repeater(count){
    var str;
    return function allTheAs(){
        if(str == undefined){
            str = "".padStart(count,"A");
        }
        return str;
    }
}

var A = repeater(10);

console.log(A()); // AAAAAAAAA

console.log(A()); // AAAAAAAAA