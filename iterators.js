
var str = "Aliz";
var world = ["l","o","v","e"];


var it1 = str[Symbol.iterator]();
var it2 = str[Symbol.iterator]();

// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());

/* var obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log([...obj]); // TypeError not iterable */

/* var obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function(){
        var keys = Object.keys(this);
        var index = 0;
        return {
            // Use of this keywor so it lexically refers to the parent context the object above
            next: () => ( index < keys.length) ?
                { done:false, value: this[keys[index++]]} :
                { done:true, value: undefined}
        }
    }
}

console.log([...obj]); // [ 1, 2, 3 ] */

function *main(){
    yield 1;
    yield 2;
    yield 3;
    return 4; // Bad practice will be skipped in [...it]
}

/* var it = main();

console.log(it.next()); //{ value: 1, done: false }
console.log(it.next());
console.log(it.next());
console.log(it.next()); // { value: 4, done: false }
console.log(it.next());
console.log(it.next());

console.log([...main()]) // [ 1, 2, 3 ] !!using a return produces a done:true so the value will be skipped
// Hence [1,2,3] instead of [1,2,3,4] */

var obj = {
    a:1,
    b:2,
    c:3,
    *[Symbol.iterator](){
        for (let key of Object.keys(this)) {
            yield this[key];
        }
    }
}

console.log([...obj]) //[ 1, 2, 3 ]
console.log([...Object.values(obj)]); //[ 1, 2, 3 ]