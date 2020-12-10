var obj = {
    name:"boB",
    email: "bOb@MaiL.com"
};

function mapObj(mapper, o) {
    var newObj = {};
    for (let key of Object.keys(o)) {
        newObj[key] = mapper(o[key]);
    }
    return newObj;
}

var res = mapObj(function lower(val){
    return val.toLowerCase();
}, obj);

console.log(res); // {name: 'bob', email: 'bob@mail.com'}
