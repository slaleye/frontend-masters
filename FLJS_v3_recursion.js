function isVowel(char) {
    return ["a","e","i","o","u"].includes(char);
}

function countVowels(str) {
    var count = 0 ;
    for (let i = 0; i < str.length; i++) {
       if(isVowel(str[i])){
           count++;
       }
    }
    return count;
    
}

var numOfVowels = countVowels("The wuick brown wolf jumps over the lazy dog ♥ "); // 11

console.log(numOfVowels);

// Changing the above to a recurssion

function countVowelsRecursively(str) {
   if(str.length == 0 ) return 0; // base condition
   var first = ( isVowel(str[0]) ? 1 : 0 );
   return first + countVowelsRecursively(str.slice(1));
    
}

var numOfVowelsR = countVowelsRecursively("The wuick brown wolf jumps over the lazy dog ♥ "); // 11
console.log(numOfVowelsR); // 11

// Reduce the last call to the recursion
function countVowelsRecursively(str) {
    var first = ( isVowel(str[0]) ? 1 : 0 );
    if(str.length <= 1) return first;
    return first + countVowelsRecursively(str.slice(1));
 }

 // Tail Call Optimizationform

 function countVowelsRecursively(count, str) {
     count +=  (isVowel(str[0]) ? 1 : 0 );
    if(str.length <= 1) return count;
    return first + countVowelsRecursively(count, str.slice(1));
 }

 //TCO with trampoline form

 function countVowelsRecursively(count, str) {
    count +=  (isVowel(str[0]) ? 1 : 0 );
   if(str.length <= 1) return count;
   return function f(){ // insert the wraper function
    return first + countVowelsRecursively(count, str.slice(1));
   }
}
