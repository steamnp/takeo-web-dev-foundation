// Spread Operator

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(...arr);

const countryNames = ["USA", "Nepal", "India", "China"];

const [firstCountry, , ...restCountries] = countryNames;

console.log(restCountries);
const [, numberOne, numberTwo, ...remaining] = arr;
console.log(numberOne);
console.log(numberTwo);
console.log(remaining);
