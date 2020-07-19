
/*
Point Free : Equational Reasoning

getPerson(function OnPerson(person){
    return renderPerson(person);
});

getPerson(renderPerson);

SHape

function isOdd(v){
    return v % 2 == 1;
}

function isEven(v){
    return !isOdd(v);
}
*/

function isOdd(v){
    return v % 2 == 1;
}

function isEven(v){
    return !isOdd(v);
}

// var t = isEven(4); // true

// t;

// var z = isOdd(2); // false

// z;

function not(fn){
    return function negated(...params) {
        return !fn(...params);       
    }
}

var isEven = not(isOdd);

var u = isEven(3);


// natural order
function mod(y) {
    return function forX(x) {
        return x % y ;
    }
}

function eq(y) {
    return function forX(x) {
        return x === y ;
    }
}
// Defining isOdd in terms of mod an eq
var mod2 = mod(2); // forX(x) More specific than mod
var eq1= eq(1); // forX(x)

function isOdd(x){
    return eq1(mod2(x));
}

console.log(isOdd(6));

// Composition pattern

function compose(fn1,fn2){
    return function composed(v){
        return fn1(fn2(v));
    }
}

var composedIsOdd = compose(eq1,mod2); //point free definition step 1
var composedIsOdd = compose(eq(1),mod(2)); //point free definition step 2
console.log(composedIsOdd(3))