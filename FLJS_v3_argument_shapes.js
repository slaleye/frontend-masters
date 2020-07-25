function unary(fn){
    return function one(arg){
        return fn(arg);
    }
}

function enaryFunction(...args){
    return args;
}
// convert enary to unary
var g = unary(enaryFunction);
console.log(g(1,2,3,4,5));


function binary(fn){
    return function two(arg1,arg2){
        return fn(arg1,arg2);
    }
}

// convert enary to binary
var h = binary(enaryFunction);

console.log(h(1,2,3,4,5));

console.log('flip and reverse adapters');
// flip binary function
function flipFirstTwo(fn){
    return function flipped(arg1,arg2,...args){
        return fn(arg2,arg1, ...args);
    }
}

var i = flipFirstTwo(enaryFunction);

console.log(i(1,2,3,4));

// Reverse Arguments
function reverseArgs(fn){
    return function reverse(...args){
        return fn(...args.reverse());
    }
}

var j = reverseArgs(enaryFunction);

console.log(j(1,2,3,4));

// Spread Adapter
// knowns as an apply
function spreadArgs(fn) {
    return function spread(args) {
        return fn(...args);     
    }
}

// Unspread takes array and return array
function gatherArgs(fn) {
    return function spread(...args) {
        return fn(args); 
    }
}


function addThem(x,y,z,w){
    return x+y+z+w;
}

function addThemArray(x){
    return x.reduce((prev,curr) => prev+curr, 0)
}

var k = spreadArgs(addThem);

console.log(k([1,2,3,4])); // 10

var l = gatherArgs(addThemArray);

console.log(l(1,2,3,4)); // 10
