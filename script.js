// Spread Operator

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(...arr);

// Rest Operator
// will be used with descturturing and function parameter

// const [firstNumber] = arr
// console.log(firstNumber)

const countryNames = ["USA", "Nepal", "India", "China"];

const [firstCountry, , ...restCountries] = countryNames;

console.log(restCountries);

// console.log(numberOne)
// console.log(numberTwo)
// console.log(remaining)

const [, numberOne, numberTwo, ...remaining] = arr;
console.log(numberOne);
console.log(numberTwo);
console.log(remaining);
