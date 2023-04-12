console.log('before promise')

// const result = fetch('https://restcountries.com/v3.1/all')
// .then((response) => {
    // return response.json()
// })
// .then((countrydata) => {console.log(countrydata)})



// handling or getting data from promise
// 1. then method
// 2.1 async await

async function getCountry() {
    const response = await fetch('https://restcountries.com/v3.1/all')

    const data = await response.json()

    console.log(data)
}

getCountry()

console.log('after promise')
 