
/* Transduction */

function add1(v) {
    return v + 1 ;
}

function isOdd(v) {
    return v % 2 == 1 ;
}

function sum(total,v) {
    return total + v ;
}

/* var list = [1,3,4,6,9,12,13,16,21];


list
.map(add1)
.filter(isOdd)
.reduce(sum); 

var transducer  = compose( mapReducer(add1), filterReducer(isOdd));

transduce(
    transducer,
    sum,
    0,
    [1,2,3,4,5,67,8]
); 


into(transducer,0,[1,2,3,4,57,85]) //by default use the type to determine which operation to execute, number : addition, string > concatenate

*/

/* Deriving transduction : extracting with reduce */


function mapWithReduce(arr, mappingFn) {
    return arr.reduce(function reducer(list,v){
                list.push( mappingFn(v)); // mutating the array : side effect!!
                return list;
    }, []);
}

function filterWithReduce(arr, predicateFn) {
    return arr.reduce(function reducer(list,v){
            if (predicateFn(v))   list.push(v);
            return list;
    }, []);
}



list = mapWithReduce(list, add1);
list = filterWithReduce(list, isOdd);
list.reduce(sum);

console.log(list.reduce(sum)); // 42

/** make utilities return us the reduce and we do the reduction ourselves  */


function mapReducer(mappingFn) {
        return function reducer(list,v) {
            list.push(mappingFn(v));
            return list;    
        }
}

function filterReducer(predicateFn) {
    return function reducer(list,v) {
        if (predicateFn(v)) list.push(v);
        return list;    
    }
}

list
.reduce(mapReducer(add1),[])
.reduce(filterReducer(isOdd),[])
.reduce(sum); // 42

/** Generalizing pushing into an array Combiner */

function listCombination(list,v) {
    list.push(v);
    return list;
}

function mapReducer(mappingFn) {
    return function reducer(list,v) {
        return listCombination(list,mappingFn(v));    
    }
}

function filterReducer(predicateFn) {
    return function reducer(list,v) {
        if (predicateFn(v))  return listCombination(list,v); 
        return list;    
    }
}

list
.reduce(mapReducer(add1),[])
.reduce(filterReducer(isOdd),[])
.reduce(sum); // 42

// Currying, curry needs to know how many arguments it needs, allows to return it separately
// Currying : unary type of function : to create specialisation from generalisation

var mapReducer = curry(2,function mapReducer(mappingFn,combineFn)  { 
            return function reducer(list,v) {
                return combineFn(list,mappingFn(v));
            };
});

var filterReducer = curry(2,function filterReducer(predicateFn,combineFn)  { 
    return function reducer(list,v) {
        if(predicateFn(v)) return combineFn(list,v);
        return list;
    };
});

list
.reduce(mapReducer(add1)(listCombination),[])
.reduce(filterReducer(isOdd)(listCombination),[])
.reduce(sum); // 42

// Single reduce

var transducer = compose ( mapReducer(add1), filterReducer(isOdd));

list
.reduce(transducer(listCombination), [])
.reduce(sum); // 42

// Now listCombination can be removed

var mapReducer = curry(2,function mapReducer(mappingFn,combineFn)  { 
    return function reducer(list,v) {
        return combineFn(list,mappingFn(v));
    };
});

var filterReducer = curry(2,function filterReducer(predicateFn,combineFn)  { 
return function reducer(list,v) {
if(predicateFn(v)) return combineFn(list,v);
return list;
};
});

var transducer = compose(mapReducer(add1), filterReducer(isOdd));

var list = [1,3,4,6,78,9];
list
.reduce(transducer(sum),0)// 42