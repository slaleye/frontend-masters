function data(){
    return [1,,2,3,4,5];
}


var tmp = data();

var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
var remainingArray = tmp.slice(3);

//console.log(first,second, third, remainingArray);


// Swapping values

var x = 10;
var y = 20;

{
    let tmp = x;
    x = y;
    y = tmp; 
}
console.log(x,y);

// Parameter Arrays

function data2(tmp) {
    var [
        first,
        second,
        third
    ] = tmp;
}


// providing fallback

var tmp = data() || [];

function data2(tmp = []) {
    var [
        first,
        second,
        third
    ] = tmp;
}