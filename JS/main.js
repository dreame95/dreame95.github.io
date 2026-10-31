/* ----------------------------------------------------
   Austin Essinger - IT Security Specialist Portfolio JS
   ---------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        { quote: "A computer once beat me at chess, but it was no match for me at kick boxing.", author: "Emo Philips" },
        { quote: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
        { quote: "Where is the 'any' key?", author: "Homer Simpson" },
        { quote: "I am Beyonce always.", author: "Michael Scott" },
        { quote: "Roads? Where we're going, we don't need roads!", author: "Doc Brown" },
        { quote: "Failure is only the opportunity to begin again. Only this time, more wisely.", author: "Uncle Iroh" }
    ];

    const quoteText = document.getElementById("quote-text");
    const quoteBy = document.getElementById("quote-by");
    const newQuoteBtn = document.getElementById("new-quote-btn");

    function getQuote() {
        if (!quoteText || !quoteBy) return;
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.innerText = `"${random.quote}"`;
        quoteBy.innerText = `- ${random.author}`;
    }

    // Generate a random quote immediately on page load
    getQuote();

    // Generate a new quote when the button is pressed
    if (newQuoteBtn) {
        newQuoteBtn.addEventListener("click", getQuote);
    }
});