// Spread Operator/Rest Parameter

const arr = [1, 2, 3, 4, 5, 6, 7]
// Spread Operator
// console.log(...arr)

const countryNames = ['USA', 'Nepal', 'India', 'China']

// Rest Operator (parameter)
const [firstCountry, , ...restCountries] = countryNames
// console.log(restCountries)
const [, numberOne, numberTwo, ...remaining] = arr
// console.log(numberOne)
// console.log(numberTwo)
// console.log(remaining)

// Rest Operator (parameter)
function print(x, ...a) {
  console.log(x)
  console.log(a)
}

// Spread Operator
print(...arr)
