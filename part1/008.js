/**
 * JS 의 자료형
 */
const x = 5; // Number (primitive)
const y = 'five' // String (primitive)
const isTrue = true // Boolean (primitive)
const empty = null // null (primitive)
let nothing // undefined (primitive)
const nothingToo = undefined // undefined (primitive)
const sym = Symbol('me') // Symbol (primitive)

const item = {
  name: 'Robert C. Martin',
  age: '75'
} // 객체, Object

const fruits = ['apple', 'banana', 'cherry'] // 배열, Array
const add = (fruit) => fruits.push(fruit) // 함수, Function
