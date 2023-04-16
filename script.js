const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
// const loader = document.getElementById('.loader');

async function getQuotes() {
  try {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const apiQuotes = data;
return apiQuotes;
  } 
  catch (error) {
    console.log(error);
  }
}

function displayapiQuotes(apiQuotes) {
  const randomIndex = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[randomIndex];
  quoteText.textContent = quote.text;
  authorText.textContent = quote.author;
  console.log(apiQuotes)
}

newQuoteBtn.addEventListener("click", async () => {
  try {
    const apiQuotes = await getQuotes();
    displayapiQuotes(apiQuotes);
  }
  catch(error) {
    console.error(error);
  }
});


twitterBtn.addEventListener("click", async () => {
  try {
    const apiQuotes = await getQuotes();
    displayapiQuotes(apiQuotes);
  }
  catch(error) {
    console.error(error);
  }
  console.log()
});

getQuotes()
.then((apiQuotes) => {
  displayapiQuotes(apiQuotes);
  quoteContainer.style.visibility = 'visible';
  console.log()
})

.catch(error => {console.error(error)});

