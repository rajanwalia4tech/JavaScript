console.log("Map Filter and Reduce are Higher order functions in JS.");
console.log("Map, filter and reduce all do't change the original array.")
const arr = [2,4,6,9];

// console.log(arr.map(x=> x*2)) // doubling the array values
// console.log(arr.map(function binary(x){ // converting array values into binary
//     return x.toString(2)
// }))
// console.log(arr) // map method doesn't change the original array


// Filter function is used to filter values from an array and return the new filtered array

// let a = [1,2,3,4,5,6,7,8];
// console.log(a.filter(x=>x%2==0)); // filter the even values from array
// console.log(a) // filter method doesn't change the original array


// Reduce function is used to iterate over an array and find takes out single value from it
let array = [10,2,13,44,25,9];

// find sum 
function findSum(array){
    let sum = 0;
    for(let i=0;i<array.length;i++){
        sum = sum+array[i];
    }
    return sum;
}
console.log(findSum(array))

// Using Reduce function
console.log(
array.reduce(function(accumulator,currentValue){
    accumulator = accumulator+currentValue;
    return accumulator
},0))

console.log(
    array.reduce((accumulator,currentValue)=>
        accumulator = accumulator+currentValue,0
    ))

// Example 2 :- Find maximum element from an array

function findMax(array){
    let max = Number.MIN_VALUE;
    for(let i=0;i<array.length;i++){
        if(max<array[i]) max = array[i];
    }
    return max;
}

console.log(findMax(array));

// using reduce function
console.log(
array.reduce(function(maximumValue,currentValue){
    if(maximumValue<currentValue) maximumValue =currentValue;
    return maximumValue
},intialValue= Number.MIN_VALUE) )


// Example 3 :- Reduce 
const users = [
    {"fName":"Rajan","lName":"Walia","age":22},
    {"fName":"Mukul","lName":"Walia","age":23},
    {"fName":"Aman","lName":"Sharma","age":19},
    {"fName":"Sahu","lName":"Tech","age":26},
    {"fName":"Pranjal","lName":"Aggarwal","age":30},
    {"fName":"Jatin","lName":"Don","age":22}    
]
// find the all users with full name
console.log(
    users.map(user=>{
        return user.fName +" "+user.lName
    })
)


// Find the count of each age of users
console.log(users.reduce(function(accumulator,currentUser){
    if(accumulator[currentUser.age]){
        accumulator[currentUser.age]++;
    }else{
        accumulator[currentUser.age] = 1;
    }
    return accumulator;
},{}))

// Example 4. find the users name with age less than 25
// chaining of map filter reduce
console.log(
    users.filter(function (user){
    if(user.age<25) return user
})
.map(user=>user.fName)
)


// Using reduce
console.log(users.reduce(function(accumulator,currentUser){
    if(currentUser.age<25)
        accumulator.push(currentUser.fName);
        return accumulator;
},[]))
