// const userloggedIn = true
const temprature = 41

// if(temprature === 50){
//     console.log("temprature is less then 51")
// }else{
//     console.log("temprature is greater then 51")
// }
// console.log("executed")

// const score = 400

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); can not be used outside of scope  

// const balance = 1000

// if(balance > 500) console.log("test");  //implicit method

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 500")
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }

const userloggedIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true
guestuser = true

if(userloggedIn && debitcard && 2==3){
    console.log("Allow to by course");
}

if(loggedInfromGoogle || loggedInfromEmail || guestuser){
    console.log("user logged In");
}
