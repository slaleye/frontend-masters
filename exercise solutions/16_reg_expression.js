// The Power of a Smile
// by Tupac Shakur
var poem = `
The power of a gun can kill
and the power of fire can burn
the power of wind can chill
and the power of a mind can learn
the power of anger can rage
inside until it tears u apart
but the power of a smile
especially yours can heal a frozen heart`;

for (let power of powers(poem)) {
	console.log(power);
}
// a gun: kill
// fire: burn
// wind: chill
// a mind: learn
// anger: rage
// smile: heal


function *powers(poem) {
    // pay attention to space in re pattern
 //(?:a) a optional match
 // \w+ word one more character
 // .* match across combined with /s
 // non greedy so dont go all the way to the end
    var re = /(?<=power of )(?<item>(?:a )?\w+).*?(?<=can )(?<power>\w+)/gs;
    var match;
    while (match = re.exec(poem)){
        let  {
            groups:{
                item,
                power
            }
        } = match;
        yield `${item}: ${power}`;
    }
}
