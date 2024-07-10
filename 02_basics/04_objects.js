// singletone object

//const twitterUser = new Object()

const twitterUser = {}

twitterUser.id = "123abc"
twitterUser.name = "Bedanta"
twitterUser.isLoggedIn = "false"


// console.log(twitterUser);

const regularUser = {
    email: "user1@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Bedanta",
            lastname: "Goswami"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d" }
const obj4 = {5: "c", 6: "d" }

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4} // spread operator
console.log(obj3);

const users = [
    {
        id: 1,
        email: "beda@gmail.com"
    },
    {
        id: 2,
        email: "bedanta@gmail.com"
    },
    {
        id: 3,
        email: "bedantagoswami@gmail.com"
    }
]

users[1].email

console.log(twitterUser)

console.log(Object.keys(twitterUser))
console.log(Object.values(twitterUser))
console.log(Object.entries(twitterUser))

console.log(twitterUser.hasOwnProperty("isLoggedIn"))
console.log(twitterUser.hasOwnProperty("isLogged"))

const course = {
    courseName: "Javascript",
    price: 999,
    courseInstructor: "Abhishek"
}

const {courseInstructor} = course
console.log(courseInstructor);