const arr = ['Nepal', 'USA', 'India']

// Imperative
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// for in loop will give index number of array
// for (let index in arr) {
//   console.log(index)
// }

// Declarative (React follows this convention)
// for of loop will give value of array elements
// for (let country of arr) {
//   console.log(country)
// }

const obj = {
  firstStudent: 'Alex',
  secondStudent: 'Gorakh',
}

for (let values of Object.keys(obj)) {
  console.log(values)
}

console.log(Object.values(obj))
