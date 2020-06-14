var arr = [{a:1},{a:2}];

arr.find(function match(v){
    return v && v.a > 1;
});
// if truthy returns the actual value
// {a:2}

arr.find(function match(v){
    return v && v.a > 10;
});
// undefined

arr.findIndex(function match(v){
    return v && v.a > 10;
});
// -1 

// Array.includes(value) returns true or false when the value exists
var arr = [10,20,3,15,NaN,80,[45,2]];
//console.log(arr.includes(20)); // true
//console.log(arr.includes(20,3)); // false
//console.log(arr.includes(NaN)); //true
//console.log(arr.includes(100)); //false
//console.log(arr.includes(100,-2)); // false
//console.log(arr.includes(45)); // false
//console.log(arr.includes([45,2])); // false

// Array Flat and FlatMap

var nestedValues = [45,25,NaN, [78,48], [[null, undefined],[80]]] ;

//console.log(nestedValues.flat(0));

//console.log(nestedValues.flat(/* default: 1 */));

//console.log(nestedValues.flat(2));

// console.log(nestedValues.flat(Infinity));

// flatMap
var arr = [1,2,3];
var new_arr = arr.flatMap(function all(v){
    return [v *2, String(v * 2)];
});
console.log(new_arr); // Array(6) [2, "2", 4, "4", 6, "6"]
