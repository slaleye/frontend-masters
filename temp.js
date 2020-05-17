/* {
  teacher = "bob";
  let teacher;
}
 */

/*  // Closure over variable i  +> will print only one value,value of i at the end of the loop
 for(var i=1;i <=3 ;i++){
     setTimeout(function printI(){
        console.log(`i is: ${i}`)
     }, i*1000 ); 
 }

// Prints i is 4
// Prints i is 4
// Prints i is 4

 // Closure over variable i  +> will print only one value,value of i at the end of the loop
 for(var i=1;i <=3 ;i++){
     let j =i;
    setTimeout(function printI(){
       console.log(`j is: ${j}`)
    }, i*1000 ); 
}

// Prints j is 1
// Prints j is 2
// Prints j is 3 */


/*  // Closure over variable i  +> will print only one value,value of i at the end of the loop
 for(let i=1;i <=3 ;i++){
   setTimeout(function printI(){
      console.log(`i is: ${i}`)
   }, i*1000 ); 
} */

// Prints j is 1
// Prints j is 2
// Prints j is 3

/* // Example Module pattern block access to fruit using IIFE
var getRecipe = ( function ModuleGetFruitRecipe(fruit) {
    var publicApi = {getRecipe,};

    return publicApi;

    function getRecipe(recipe) {
        console.log(`Cook some ${fruit} ${recipe}`)
    }

})("Banana");

getRecipe.getRecipe("Split");
getRecipe.getRecipe("Smoothie");
// Expected>Cook some Banana Split */

/* // Example Module pattern block access to fruit using function Module Factory
function ModuleGetFruitRecipe(fruit) {
    var publicApi = {getRecipe,};

    return publicApi;

    function getRecipe(recipe) {
        console.log(`Cook some ${fruit} ${recipe}`)
    }

}

var bananaRecipe = ModuleGetFruitRecipe("Banana");
bananaRecipe.getRecipe("Split");
bananaRecipe.getRecipe("Smoothie");


var appleRecipe = ModuleGetFruitRecipe("Apple");
appleRecipe.getRecipe("Pie");
appleRecipe.getRecipe("Juice");
 */

 //Export andimporting module


/*  ModuleGetFruitRecipe.mjs >

 var fruit ="Banana";

 export default function getRecipe(recipe) {
     console.log(`Cook some ${fruit} ${recipe}`)
 }
 */