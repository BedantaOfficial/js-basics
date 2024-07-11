function sayMyName(){
    console.log("hello")
} 

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
   
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 9)

console.log("Result: ", result);


function loginUserMessage(username = "chiman"){
    if(!username){
       console.log("Please enter a username")
       return
    }
    return `${username} you just logged In`
}

console.log(loginUserMessage("Bedanta"))



function calculateCartPrice(val1, val2, ...num1){    
    return num1
}

console.log(calculateCartPrice(200, 300, 400))


const obj = {
    username: "Bedanta",
    price: 300
}

function handleObject(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(obj)

handleObject({
    username: "Abhishek",
    price: 600
})


const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([100, 300, 400, 500]))