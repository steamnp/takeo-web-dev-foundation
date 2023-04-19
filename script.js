const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const quoteIcon = document.querySelector(".fa-quote-left");

let apiQuotes = [];

async function getQuote() {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  apiQuotes = data;
  showLoadingSpinner();
  setTimeout(() => {
    getRandomQuote();
    hideLoadingSpinner();
  }, 1000);
}

function getRandomQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Check if Author field is blank and replace it with "Unknown"
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Check quote length to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

// Tweet a quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Show loading spinner
function showLoadingSpinner() {
  loader.style.display = "block";
  quoteText.style.display = "none";
  authorText.style.display = "none";
  quoteIcon.style.display = "none";
  twitterBtn.style.display = "none";
  newQuoteBtn.style.display = "none";
}

function hideLoadingSpinner() {
  if (!loader.hidden) {
    quoteText.style.display = "block";
    authorText.style.display = "block";
    quoteIcon.style.display = "inline";
    twitterBtn.style.display = "inline-block";
    newQuoteBtn.style.display = "inline-block";
    loader.style.display = "none";
  }
}

// Event listeners
newQuoteBtn.addEventListener("click", getRandomQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On load
getQuote();
