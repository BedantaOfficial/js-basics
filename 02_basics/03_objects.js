// object literals

const mySym = Symbol("key1") 

const jsUser = {
    name: "Bedanta",
    age: 24,
    "full name": "Bedanta Goswami",
    [mySym] : "myKey1",
    location: "guwahati",
    email: "bed@gmail.com",
    isLoggedIn: "false",
    lastLoggedInDays: ["Monday", "Saturday"]
}

jsUser.email = "bedanta@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "ghy@gmail.com"
console.log(jsUser)

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.greetings = function(){
    console.log("Hello Js User")
}

jsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());