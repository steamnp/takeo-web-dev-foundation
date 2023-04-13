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
// If you are using then method -> use catch function (method) at the end of last then method to handle errors

// method -> function
const data = fetch('https://type.fit/api/quotes')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })

// fetch -> axios
