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

//explicit binding: use a function from different context.call a function with different objects or context
var printNameWithVertue = function (v1, v2) {
    console.log(`${this.name} is ${v2} and ${v1} `);
}
var oneMane = {
    name: 'jani na ',
    age: 45
}
var v1 = "handsome";
var v2 = "characterless";
//printNameWithVertue.call(oneMane, v1, v2); will call the function immediately with thisObjec and these parameter
//printNameWithVertue.apply(oneMane, [v1, v2]); will call the funtion immediately with thisobject and these array values
var newfunction = printNameWithVertue.bind(oneMane, v1, v2); //will not call the funciton immediately but return a new function instance;
newfunction();

//new binding
function AnyName(name, age) {
    //let this=Object.create(null);
    this.name = name;
    this.age = age;
    console.log(this.name + ' is new binding');
    //return this
}

var johirul = new AnyName('johirul', 34);

//window binding .when above three bindings will not work by default window binding is working.
var windfunc = function () {
    console.log(this)
    console.log(this.name) //undefined;
}
var amr = {
    name: 'ami',
}
windfunc();