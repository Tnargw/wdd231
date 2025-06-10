function displayQuotes(quotes) {
    const listElement = document.getElementById("quoteList");
    listElement.innerHTML = ""; 
    quotes.forEach(quote => {
        const li = document.createElement("li");
        li.textContent = quote;
        listElement.appendChild(li);
    });
}


function checkForQuotes() {
    const storedQuotes = localStorage.getItem("pride-quotes");
    if (storedQuotes) {
      const quotes = JSON.parse(storedQuotes);

        displayQuotes(quotes);

        console.log("Loaded the quotes from local storage.");
        document.getElementById("quotes-button").classList.add("hide")
    }
}


async function loadQuotes() {
    try {
        const response = await fetch('quotes.json');
        const data = await response.json(); 

        const prideBook = data.books.find(book => book.title === "Pride and Prejudice");
        if (!prideBook) {
            throw new Error("Book was not found");
        }

        const quotes = prideBook.quotes;
        displayQuotes(quotes);

        localStorage.setItem("pride-quotes", JSON.stringify(quotes));
        console.log("Fetched quotes from API and saved to localStorage.");

        document.getElementById("quotes-button").classList.add("hide");
    } catch (error) {
        console.error("Error loading quotes:", error);
    }
}


checkForQuotes()
document.getElementById("quotes-button").addEventListener("click", loadQuotes)


