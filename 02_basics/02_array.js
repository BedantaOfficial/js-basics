const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["sperman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const myHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(myHeros)

const all_new_heros = [ ...marvel_heros, ...dc_heros]  // spread operator
console.log(all_new_heros)

const another_array = [1, 2, 3, 4, [3, 4, 5,], 9, 8, [1, 3, 4]] 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Bedanta"))
console.log(Array.from("Bedanta"))
console.log(Array.from({name: "Bedanta"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))