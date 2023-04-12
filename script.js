const name = 'Gorakh'

// single processor or single thread -> call stack

// Blocking code (Synchronous Code)
// for (let i = 0; i < 100000; i++) {
//   console.log('Running Loop')
// }

console.log('Running before timer')

// Asynchronous code
// const interval = setInterval(() => {
//   console.log('first interval')
// }, 100)

// setInterval(() => {
//   clearInterval(interval)
// }, 1000)

for (let i = 0; i < 1000; i++) {
  console.log('Running Loop')
}

console.log('Running after timer')
