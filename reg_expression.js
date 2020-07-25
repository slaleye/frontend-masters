var message = "Hello world";

/* console.log(message.match(/(l.)/g)); //[ 'll', 'ld' ] No Assertion

console.log(message.match(/(l.)$/g)); // [ 'ld' ] Only at the end

console.log(message.match(/(l.)(?=o)/g)); //[ 'll' ] positive Look Ahead: pattern like o does match

console.log(message.match(/(l.)(?!o)/g)); //[ 'lo', 'ld' ] negative Look Ahead: pattern like o does match

console.log(message.match(/(?<=e)(l.)/g)); //[ 'll' ] positive Look Behind: pattern like e does match

console.log(message.match(/(?<!e)(l.)/g)); //[ 'lo', 'ld' ] negative Look Behind: pattern like o does match
 */
// Capture group

console.log(message.match(/.(l.)/)); // [ 'ell', 'll', index: 1, input: 'Hello world', groups: undefined ]


console.log(message.match(/([hel])o Wor\1/)); // \1 match same thing after the pattern, 

console.log(message.match(/(?<cap>l.)/).groups); // makes a catpure group call cap returns a group property with name called cap

console.log(message.match(/(?<cap>[kjl])o Wor\k<cap>/)); // [Object: null prototype] { cap: 'll' }

console.log(message.replace(/(?<cap>l.)/g,"-$<cap>-"));// He-ll-o wor-ld- 

console.log(message.replace(/(?<cap>l.)/g,function re(...args){
    var [,,,,{ cap }] = args;
    return cap.toUpperCase();
})); //HeLLo worLD

//dotall Mode

var msg = `
The quick brown wolf
jumps over the
lazy dog
`;

msg.match(/brown.*over/);  //null

msg.match(/brown.*over/s); // ["brown fox\njumps over"]