const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[4])

// myArr.push(6)
// myArr.push(9)
// myArr.pop()
// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(3))


// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

// slice and splice in array

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3)
console.log(myN1);

console.log("B ", myArr);

const myN2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myN2)