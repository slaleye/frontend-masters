/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  const sayWelcome = () => console.log('welcome');
  setTimeout(sayWelcome, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log('Hello');
  setTimeout( () => console.log('good bye'), 2000)
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  setInterval(() => console.log('Hi again'), 1000)
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  const intervalID = setInterval(() => console.log('hi for now'), 1000);
  setTimeout(() => clearInterval(intervalID), 5000);       
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  // ADD CODE HERE 
  const intervalID = setInterval(func,interval*1000);
  setTimeout(() => clearInterval(intervalID) , duration*1000);
  
}
// Uncomment the following lines to check your work!
 function theEnd() {
   console.log('This is the end!');
 }
 // everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
// everyXsecsForYsecs(theEnd, 1, 5); 

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  
  return () => {
    for( let i = 1 ; i < target; i++){
         console.log(i +' '+ wait + ' milliseconds')
    }
 
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
 const countLogger = delayCounter(3, 1000)
 countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

