function upper(strings,...values) {
    var ret = "";
    for (let i = 0; i < strings.length; i++) {
        // strings indexes will always be + 1 of the values, therefor when i > 0 we can get the values by using -1
        if( i > 0){
            ret += String(values[i -1]).toUpperCase();
        }
        ret += strings[i];
          
    }
    return ret;
}

var name = "Salomon",
	twitter = "slaleye",
    topic = "JS Recent Parts",
    teacher= "kyle simpson";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic} by ${teacher}!` ===
	"Hello SALOMON (@SLALEYE), welcome to JS RECENT PARTS by KYLE SIMPSON!"
);
