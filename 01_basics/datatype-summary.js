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


//Memories

// stack(primitive datatype used stack memory)  Heap(non-primitive or reference datatype used heap memory)

let myName = "Bedanta"
let anotherName = myName

anotherName = "Bed"
console.log(myName);
console.log(anotherName);





let userOne = {
    email: "bedanta@gmail.com",
    upi: "user@sbi" 
} 

let userTwo = userOne

userTwo.email = "goswami@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);