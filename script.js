const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

// Use async await to get quote data
// update apiQuotes with your quote data

// https://type.fit/api/quotes

// If you are using async await to consume promises -> use try catch block to handle errors
// If you are using then method -> use catch function to handle errors

// method -> function
const data = fetch('https://type.fit/api/quotes').then()
console.log(data)

const firstNumber = 10
const secondNumber = 20

let result = 0

// Side Effect (Avoid most of the time)
function add() {
  result = firstNumber + secondNumber
}

const output = add()

console.log(result)
