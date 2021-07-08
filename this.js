//impicit binding
//explicit binding
//new binding
//window binding

var sakib = {
    name: 'sakib',
    age: 35,
    printPlayerName: function () {
        console.log(this.name);
    }
}
//this is implicit binding
//this keyword points to the sakib object
sakib.printPlayerName()

//if before function call there is no dot notation then this keyword will point to window notation. this is implicit binding.

//example of implicit function
var printPlayerNameFunction = function (obj) {
    obj.functionName = function () {
        console.log(this.name);
    }
}
let mahmud = {
    name: 'Mahmud',
    age: 23
}
let ebadot = {
    name: 'abadot',
    age: 45
}
printPlayerNameFunction(mahmud);
printPlayerNameFunction(ebadot);
mahmud.functionName();
ebadot.functionName();

//2nd Example 
var person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name)
        },
        father: {
            name: 'Mr. xxxx',
            printName: function () {
                console.log(this.name);
            }
        }
    }
}
var musfiq = person('mushfiq', 34);
musfiq.father.printName();