function data(){
    return [1,,2,3,4,5];
}

/* var [
    first,
    second = 10,
    third,
    ...remainingArray
] = data(); */

var tmp;
var [
    first,
    second = 10,
    third,
    ...remainingArray
] = tmp = data();

//console.log(first,second, third, remainingArray,tmp);

// Swapping Values

var x = 10;
var y = 20;

[x,y] = [y,x];
console.log(x,y);

// Parameter Arrays

function data2([
    first,
    second,
    third
]) {
    // ..
}

// providing fallback


var [
    first,
    second = 10,
    third,
    ...remainingArray
] = tmp = data() || [];

function data2([
    first,
    second,
    third
] = []) {
    // ..
}