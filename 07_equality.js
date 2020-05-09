// TODO: write `findAll(..)`
function findAll(needle, arr){
    let result = [];
    for (let arrVal of arr) {
        
        if(Object.is(needle,arrVal)){
            console.log(1);
            
            result.push(arrVal);
        } else if (needle == null && arrVal == null) {
            //null and undefined are coercively the same, no need to do a check for undefined
            console.log(2);
            result.push(arrVal);
        } else if(typeof needle == "boolean" && typeof arrVal == "boolean"){
                // Now that we are sure that they are both booleans we can check if they are equal
                if(needle == arrVal){
                    result.push(arrVal);
                }
                console.log(3);
        } else if (  typeof needle == "string" && needle.trim() != ""  && typeof arrVal == "number" && !(Object.is(arrVal,-0))) {
            if(needle == arrVal){
                result.push(arrVal);
            }
            console.log(4);
        } else if (typeof needle == "number" && !(Object.is(needle,-0)) && !(Object.is(needle,NaN)) && !(Object.is(needle,Infinity))
                   && !(Object.is(needle,-Infinity))  && typeof arrVal == "string"  && arrVal.trim() != "" ) {
            if(needle == arrVal){
                result.push(arrVal);
            }
            console.log(5);
        }
        
    }
    console.log(result);
    
    return result;
}


// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
