function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

function uniqID(min,max) {
    return getRandomIntInclusive(min,max);
}


console.log('********* MAP ******');

function makeRecord(name){
    var userRecord = {};
    var trueOrFalse = (Math.floor(Math.random() * 2) == 0);
    userRecord.id = uniqID(100,1000);
    userRecord.name = name;
    if(trueOrFalse){   
    	userRecord.session = uniqID(100,1000);
    }
    return userRecord ;
}

function map(mapper, arr){
    var newList = [];
    for(let elem of arr){
        newList.push(mapper(elem));
    }
    return newList;
}

var records = map(makeRecord,["Bob","Linda","Gene","Jimmy"]);
console.log(JSON.stringify(records));
// built in into the Array prototype
//console.log(JSON.stringify(["Tina","Louise"].map(makeRecord)));

console.log('********* FILTER ******');
// Filter in
function filterIn(predicate, arr){
    var newList = [];
    for(let elem of arr){
        if(predicate(elem)){
            newList.push(elem);
        }
    }
    return newList;
}

function isLoggedIn(user){
    return user.session != null;
}

console.log('Logged In users');

console.log(JSON.stringify(filterIn(isLoggedIn,records)));
//  Same as built in method for Filter Arrays
//console.log(JSON.stringify(records.filter(isLoggedIn)));


console.log('********* REDUCE ******');

// Reduce a list of tuples into an object
function addToRecord(record,[key,value]){
    return {...record, [key]:value}; // [key] computed name of key, ..record create a copy of the record, dont mutate it
}

function reduce(reducer,initialVal,arr) {
    var ret = initialVal;
    for(let elem of arr){
        ret = reducer(ret,elem);
    }
    return ret;
}

var array_records = [ ["name","Gene"],["age",10],["isTeacher",false]] ;

console.log(JSON.stringify(reduce(addToRecord,{},array_records)));
// Also implemented on js array
// reducer function, plus initial value
console.log(array_records.reduce(addToRecord,{}));

// Composition with Reduce

function add1(v) { return v + 1 ; }
function mul2(v) { return v * 2 ; }
function div3(v) { return v / 3 ; }

function composeTwo(fn2, fn1) {
    return function composed(v) {
        return fn2(fn1(v)); // Composition: one function output is passed to another function
    };
}

var f = [div3,mul2,add1].reduce(composeTwo);
var p = [add1,mul2,div3].reduceRight(composeTwo);

console.log(f(8)); // 8 + 1 * 2 / 3 =  6
console.log(p(8)); // 8 + 1 * 2 / 3 6

// ComposeTwo has the shape of a reducer, takes two functions and returns one
// Through fn2(fn1(v))

function compose(...fns) {
    return function composed(v) {
        return fns.reduceRight(function invoke(val,fn){
            return fn(val);
        },v);
    };
}

var w = compose(div3,mul2,add1);

console.log(w(8)); // 

// Piping version with reduce

function pipe(...fns) {
    return function piped(v) {
      return fns.reduce(function invoke(val,fn){
            return fn(val);
        },v);
    };
}