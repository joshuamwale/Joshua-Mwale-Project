//DOMContentLoaded to ensure DOM is loaded before running my index.js file

document.addEventListener("DOMContentLoaded", function() {
    fetchMovies()


function fetchMovies() {
    return fetch("https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010")
    .then((response) => response.json())
    .then((json) => renderMovies(json));
}
    
//Render movies
function renderMovies(movies) {
    const main = document.querySelector("detailed-info")
    movies.forEach(movie => {
        const movieImage = document.getElementById("image");
        movieImage.innerHTML = `
        <img
        src="${resultType + title + description}"
        alt ="${id}"`
        main.appendChild(movieImage);
    });

    const movieSearch = document.getElementById("search-movie")

//adding event listeners  - click
    searchBar.addEventListener("click", () => {
    const searchInput = document.getElementById("search results")
})

//Reset search
    let form= document.querySelector('movie-form')
    form.addEventListener('submit', (event) => {
    event.preventDefault()
    toSearch(event.target.movie-form.value)
    form.reset()
    })
}
})
