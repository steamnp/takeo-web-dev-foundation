const numbers = [2, 1, 3, 4, 5]

// const firstElement = number[0]
// const secondElement = number[1]

// useState in React: Reaview this concept
// Array Descturcuting
const [firstElement, secondElement] = numbers

const numbersObj = {
  numTwo: 2,
  numOne: 1,
  numThree: 3,
}

// Object Descturcuting
const { numOne, numThree } = numbersObj

// console.log(numOne)

console.log(...numbers)

// let arr = [5, 1, 8, 16]
// arr.sort()
// console.log(arr)
