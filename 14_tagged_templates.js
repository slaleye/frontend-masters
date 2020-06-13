function upper(strings,...values) {
    var str = "";
    for (let i = 0; i < strings.length; i++) {
        str += strings[i];
        if(typeof values[i] == "string" && values[i].trim().length > 0){
            str += values[i].toUpperCase();
        }    
    }
    return str;
}

var name = "Salomon",
	twitter = "slaleye",
    topic = "JS Recent Parts",
    teacher= "kyle simpson";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to ${topic} by ${teacher}!` ===
	"Hello SALOMON (@SLALEYE), welcome to JS RECENT PARTS by KYLE SIMPSON!"
);
