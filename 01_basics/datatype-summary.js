// Primitive datatypes

//7 types- string, number, boolean, null, undefined, symbol

//Reference datatypes(non-primitive)

//array, object, function


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const heros = ["shaktiman", "goga", "naagraj"]

const object = {
    name: "Bedanta",
    age: 24
}

const myFunction = function(){
    console.log("Hellow World")
}

console.log(typeof myFunction);