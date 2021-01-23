var obj = {
    name:"boB",
    email: "bOb@MaiL.com"
};

function mapObj(mapper, o) {
    var newObj = {};
    for (let key of Object.keys(o)) {
        newObj[key] = mapper(o[key]);
    }
    return newObj;
}

var res = mapObj(function lower(val){
    return val.toLowerCase();
}, obj);

console.log(res); // {name: 'bob', email: 'bob@mail.com'}

// Monads
// A wrapper around a value with a set of behavior

function Just(val) {
    return {map, chain, ap };

    function map(fn){
        return Just(fn(val));
    }

    // aka: bind, flatMap
    function chain(fn) {
        return fn(val); // Not technically true, should return a monad
    }

    function ap(anotherMonad){
        return anotherMonad.map(val); // implies that val has to be a function, Monad could have curried function
    }
}

// Example Just Monad

var fortyOne = Just(41);
var fortyTwo = fortyOne.map(function inc(v){
    return v +1;
});

function identity(v){
    return v;
}

fortyOne.chain(identity); // 41
fortyTwo.chain(identity); // 42 
// violation not supposed to call chain with a mapper function that won't return a monad

var user1 = Just("Salomon");
var user2 = Just("Aliz");

// tuple has a reducer shape takes 2 func and return a value out of it 
var tuple = curry(2, function tuple(x,y) {
    return [x,y];
});

var users = user1.map(tuple).ap(user2);
// user1.map(tuple) // Just(function tuple("Salomon") { return function(y) { return ["salomon", y]}})
// user1.map(tuple)  > Just(tuple("Salomon"))
// .ap  >  user2.map(tuple("Salomon")("Aliz"))
//debug inspection
users.chain(identity); // ["Salomon", "Aliz"]

// Most common way of using a Monad

//Maybe Monad

var someObj = { something : { else : { entirely: 42} } } ;
// someObj.something.else.entirely; // 42
// Using a monad to ensure no exeption when the nested properties are missing
// Monading way of representing No-op
function Nothing() {
    return { map : Nothing, chain: Nothing, ap: Nothing};
}

var Maybe = {Just, Nothing, of: Just};

function fromNullable(val){
    if(val == null) return Maybe.Nothing();
    else return Maybe.of(val);
}

var prop = curry(2, function prop (prop, obj){
    return fromNullable( obj[prop]);
});

Maybe.of(someObj)
.chain( prop ("something"))
.chain( prop ("else"))
.chain( prop ("entirely"))
//debug inspection
.chain(identity) ; //42
