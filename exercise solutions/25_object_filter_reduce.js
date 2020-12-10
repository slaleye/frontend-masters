"use strict";

// inception!
curry = curry(2,curry); // So we can call curry like curry(arity) fn(arg)

var nums = {
	first: [3,5,2,4,9,1,12,3],
	second: [5,7,7,9,10,4,2],
	third: [1,1,3,2]
};

// var filteredNums = filterObj(function(list ){
// 	return isOdd(listSum(list));
// },nums);
// isOdd is taking the result of listSum(list) as an input it is therefore a composition


var filteredNums = filterObj(compose(isOdd,listSum),nums);

// var filteredNumsProducts = mapObj(function(list){
// 	return listProduct(list);
// },filteredNums);
// listProduct(list) and function (list) have the same shape they are interchangeable

var filteredNumsProducts = mapObj(listProduct,filteredNums);

// var res = reduceObj(function(acc,v){
// 	return acc + v;
// },0,filteredNumsProducts);
// res is performing an addition we already have such an utility

var res = reduceObj(sum,0,filteredNumsProducts);
console.log(res); // 38886

// filterNums and filteredNumsProduct are being passed into reduceObj as input, it is a composition
// but since it is in a order we can use piping
pipe(
	filterObj(compose(isOdd,listSum)),
	mapObj(listProduct),
	reduceObj(sum,0)
)(nums); 
// But the filter,map and reduce objects are expecting an object param
// To remedy to that we need to use currying to use one the input available and defer the other input until later
pipe(
	curry(2)(filterObj)(compose(isOdd,listSum)),
	curry(2)(mapObj)(listProduct),
	curry(2)(reduceObj)(sum)(0)
)(nums); 
// This operation is quite repetitive, think about the individual values as a data structure

[
	curry(2)(filterObj)(compose(isOdd,listSum)),
	curry(2)(mapObj)(listProduct),
	curry(2)(reduceObj)(sum)(0)
].reduce(binary(pipe)) (nums); 
// Js reduce, map and filter passes actually 4 arguments instead of 2 in this case
// third argument the index of the value and fourth the original array
// we use the binary to restrict the pipe to only take two arguments 


// ************************************

function mapObj(mapperFn,o) {
	var newObj = {};
	var keys = Object.keys(o);
	for (let key of keys) {
		newObj[key] = mapperFn( o[key] );
	}
	return newObj;
}

function filterObj(predicateFn,o) {
    var newObj = {};
	var keys = Object.keys(o);
	for (let key of keys) {
		if(predicateFn(o[key])) newObj[key] = o[key];
	}
	return newObj;
}

function reduceObj(reducerFn,initialValue,o) {
    var result = initialValue;
    var keys = Object.keys(o);
    for (let key of keys) {
        result = reducerFn(result, o[key]);
    }
    return result;
}


// ************************************

function curry(arity,fn) {
	return (function nextCurried(prevArgs){
		return function curried(nextArg){
			var args = prevArgs.concat([nextArg]);
			if (args.length >= arity) {
				return fn(...args);
			}
			else {
				return nextCurried(args);
			}
		};
	})([]);
}
function compose(...fns) {
	return function composed(arg) {
		return fns.reduceRight((result,fn) => fn(result),arg);
	};
}
function pipe(...fns) {
	return compose(...fns.reverse());
}
function binary(fn) {
	return function two(arg1,arg2){
		return fn(arg1,arg2);
	};
}


// ************************************

function isOdd(v) { return v % 2 == 1; }
function sum(x,y) { return x + y; }
function mult(x,y) { return x * y; }
function listSum(list) { return list.reduce(sum,0); }
function listProduct(list) { return list.reduce(mult,1); }