function data() {
    return {a:1, b:2 , c:3};
}

var tmp = data() || {};
var first = tmp.a;
var second = tmp.b;
var third= tmp.c;

console.log(first,second,third);

