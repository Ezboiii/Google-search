    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const clearButton = document.getElementById("clear-button");
    const main = document.querySelector("main");
    const apiKey = "AIzaSyCJSz9mET1BU1Rs0BD7UGzWmUWXWWQIWXc"; 
    const searchEngineId = "4302779a9238345c4";
    
    searchButton.addEventListener("click", performSearch);
    clearButton.addEventListener("click", clearSearch); 
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          performSearch();
        }
      });

    function performSearch() {
      const query = searchInput.value;
      if (query) {
        fetchSearchResults(query);
      }
    }

    function clearSearch() {
        searchInput.value = "";
        main.innerHTML = "";
      }
      
    
    function fetchSearchResults(query) {
      const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.items))
        .catch(error => console.error("Error fetching search results:", error));
    }
    
    function displayResults(results) {
      main.innerHTML = "";
      results.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");
        const title = document.createElement("h2");
        title.textContent = result.title;
        const link = document.createElement("a");
        link.href = result.link;
        link.textContent = result.link;
        resultItem.appendChild(title);
        resultItem.appendChild(link);
        main.appendChild(resultItem);
      });
    }