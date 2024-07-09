const name = "Bedanta"
const repoCount = 5

console.log(`My name is ${name} and my repocount is ${repoCount}`);  //string interpollation

const gameName = new String('Bedanta.Goswami')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 9)

console.log(newString);

const anotherString = gameName.slice(-12, 4)  // we can use negative value using slice

console.log(anotherString);

const newStringOne = "  Bed  "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bed.com/bedanta%20goswami"
console.log(url.replace("%20", "-"))

console.log(url.includes("chiman"))

console.log(gameName.split('.'))

