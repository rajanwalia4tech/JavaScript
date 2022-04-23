// __proto__ should be used for debugging purpose as JS says
// In JS inheritence works using __proto__ in objects 

let stu1 = {
  name: "Rajan",
  age: 22
}

let stu2 = Object.create(stu1)
// console.log(stu1) // { name: 'Rajan', age: 22 }
// console.log(stu2) // {}

// but following is coming form stu1 object 

// console.log(stu2.name) // this is comming form stu1
// console.log(stu2.age) // coming form stu1 object
// console.log(stu2.__proto__) // stu1 obj
// console.log(stu2.__proto__ == stu1)
// console.log(stu1.__proto__) // Object
// console.log(stu1.__proto__._proto__) // null

// inheritence chain is stu2 -> stu1 -> Object -> null
// stu2.class = "MCA";
// console.log(stu2.class) // MCA
// console.log(stu2) // { class: 'MCA' }

// // Shadowing the property happens in write operation

// stu2.name = "Mukul"; // created name in stu2 obj
// console.log(stu2) // { class: 'MCA', name: 'Mukul' }

stu1.age++;
console.log(stu1.age) // 23
console.log(stu2.age) //23

stu2.age++; // means stu2.age(write means create age in stu2 obj) = stu2.age(here reading is happening from stu1.age) + 1
console.log(stu2.age) // 24
console.log(stu1) // { name: 'Rajan', age: 23 }
console.log(stu2) // { age: 24 }


