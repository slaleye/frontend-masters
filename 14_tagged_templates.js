function upper(strings,...values) {
    var ret = "";
    for (let i = 0; i < strings.length; i++) {
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
