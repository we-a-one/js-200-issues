hello()
function hello() {
  console.log('say hello!')
}
// "say hello!"
// 이건 호이스팅이 됐음

hello2()
var hello2 = function() {
  console.log('say hello, hello!')
}
// Uncaught TypeError: hello2 is not a function