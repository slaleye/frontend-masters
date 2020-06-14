function data() {
    return {a:1, b:2 , c:3 , d:4, e:5};
}
/* var first, second;

({
    a: first,
    b: second,
    c: third = 14,
    ...fourthAndFifth
} = tmp = data()); */

var {
    a: first,
    b: second,
    c: third = 14,
    ...fourthAndFifth
} = tmp = data() || {};
// source: target = default
// fourthAndFifth  object containing d and e
console.log(first,second,third);


// NAmed Arguments

function lookupRecords(store ="person-rec", id=-1) {
    //..
}
// use destructuring when more than 2 or 3 arguments
function lookupRecords({
    store = "person-rec",
    id = -1
}) {
    //..
}


lookupRecords({ id: 42});