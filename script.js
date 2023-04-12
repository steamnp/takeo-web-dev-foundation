// Promise
console.log('before promise')

// then method -> 2015 (ES6)
// const result = fetch('https://restcountries.com/v3.1/all')
//   .then((response) => {
//     return response.json()
//   })
//   .then((countryData) => {
//     console.log(countryData)
//   })

// Handling (getting data) from promise
// 1. then method
// 2. async await

// async await -> 2017 (ES8)
async function getCountry() {
  try {
    console.log('Inside country function')
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getCountry()

console.log('after promise')
