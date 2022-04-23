// console.log(0 == '') // true 
// console.log(0 == '\n') // true
// console.log(0 == '\t') // true
// console.log(0 == ' ') // true
// console.log(0 == '\r') // true
// console.log(0 == '\s') // false
// console.log(0 == '\f') // true
// console.log(Number('\n')) // 0

// console.log(Number(true)) // 1
// console.log(Number(false)) // 0


// let A == B and If  datatype of a and b is same then type casting won't happen.

// console.log(0 == false)
// console.log('' == false)
// console.log(' ' == 'false') // means ' ' === 'false' => false
// console.log(0 == '') // true bcoz  Number('') => 0
// console.log(0 == " ") //true
// console.log('false' == false) // false

console.log([1, 2] == [1, 2]) // false, bcoz of different references in memory 
let a = [1, 2]
let b = a;
console.log(b == a) // true, same references in memory