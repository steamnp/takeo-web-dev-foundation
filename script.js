const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

//Generating a random number between 1 and 1643

async function getQuote() {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  apiQuotes = data;
  //console.log(apiQuotes);
}
newQuoteBtn.addEventListener("click", function () {
  //Generating a random number
  const randNum = Math.ceil(Math.random() * 1643);
  authorText.textContent = apiQuotes[randNum].author;
  quoteText.textContent = apiQuotes[randNum].text;
});

twitterBtn.addEventListener("click", function () {
  const randNum = Math.ceil(Math.random() * 1643);
  output = apiQuotes[randNum].text + " -" + apiQuotes[randNum].author;
  window.open("https://twitter.com/intent/tweet?text=" + output);
});

getQuote();
