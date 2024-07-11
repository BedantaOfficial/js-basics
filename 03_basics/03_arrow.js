const user = {
    username: "Bedanta",
    price: 500,
    
    welcomeMessage: function(){
        // console.log(`${this.username}, Welcome to our website`)
        // console.log(this)
    }
}

user.welcomeMessage()
user.username = "Abhishek"
user.welcomeMessage()


// function chai(){
//      let username = "jyoti"
//     console.log(this)
//     console.log(this.username)    
// }
// chai()

// const chai = function(){
//     let username = "jyoti"
//     console.log(this.username);

// }
// chai()


const chai = () => {
    let username = "shubham"
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 5))


const addTwo = (num1, num2) => num1 + num2    // implicit arrow function
console.log(addTwo(3, 4))

const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(3, 4, 5))

const addOne = () => ({username: "Bedanta"})
console.log(addOne())

