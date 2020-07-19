"use strict";


// output function has the same shape as console,log
// function output(txt) {
// 	console.log(txt);
// }

// needs a hard bind to the console object
var output= console.log.bind(console);

// function printIf(shouldPrintIt) {
// 	return function(msg) {
// 		if (shouldPrintIt(msg)) {
// 			output(msg);
// 		}
// 	};
// }

function when(fn) {
    return function(predicate){
        return function(...args){
            if (predicate(...args)) {
                return fn(...args);
            }
        };
    };
}

// printIf     (isShortEnough)(msg1);
// when(output)(isShortEnough)(msg1);

var printIf = when(output);

function isShortEnough(str) {
	return str.length <= 5;
}

// function isLongEnough(str) {
// 	return !isShortEnough(str);
// }

function not(fn) {
    return function negated(...args) {
        return ! fn(...args);
    }    
}

var isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World