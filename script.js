const numbers = [2, 1, 3, 4, 5]
console.log(numbers[4])
// We are trying to access element 4 from array block scope

const numThree = 10

// every value inside array are called 'element'
// In Array each and every element are give index number: index number starts from 0

const numbersObj = {
  numTwo: 2,
  numOne: 1,
  numThree: 3,
}
// every value inside object are called value
// In object each and every property are give name: property name

console.log(numThree)
// We are trying to access numThree from global scope

console.log(numbersObj.numThree)
// We are trying to access numThree from obj block scope

if (true) {
  // Block scope
  const myName = 'Gorakh'

  // Accessing global scope in block scope: Permitted
  console.log(numThree)
}

// we are console logging in global scope
// console.log(myName)

// accessing block scope from global scope in not permitted

function print() {
  const age = 30
  // Function Scope
  console.log(numThree)
}

if (true) {
  console.log(age)
}

print()
