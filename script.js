const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Use async await to get quote data
// update apiQuotes with your quote data

// https://type.fit/api/quotes

async function getQuotes() {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  apiQuotes = data;
  console.log(apiQuotes)
}
getQuotes()