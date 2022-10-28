let user = {
  name: 'hello'
}
let descriptor = Object.getOwnPropertyDescriptor(user, 'name') 
console.log(descriptor) /*
{
  configurable: true,
  enumerable: true,
  value: "hello",
  writable: true
}
*/