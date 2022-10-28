 const symbol = Symbol()
 const hello = Symbol('hello')

 console.log(Number(3) === Number(3)) // true
 console.log(Symbol('symbol') === Symbol('symbol')) // false
 console.log(Symbol() === Symbol()) // false
 console.log(typeof Symbol()) // "symbol"


const nationality = Symbol('nationality')
const user = {
  name: 'jay'
 }

// 객체의 키로 사용 가능
user[nationality] = 'korean'
console.log(user[nationality]) // "korean"

// for ... in 으로 심볼 키 확인 안됨
// only "name"
for (let key in user)
  console.log(key)

// 객체 키를 추출하는 일반적인 방법은 안됨
console.log(Object.keys(user)) // ["name"]
console.log(Object.getOwnPropertyNames(user)) // ["name"]

// JSON 으로 변환 안됨
console.log(JSON.stringify(user)) // {"name":"jay"}

// `Object.getOwnPropertySymbols(...)` 로만 추출 가능
const symbolProperties = Object.getOwnPropertySymbols(user)
console.log(symbolProperties) // [Symbol(nationality)]
console.log(user[symbolProperties[0]]) // "korean"