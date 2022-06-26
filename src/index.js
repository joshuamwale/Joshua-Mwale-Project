//DOMContentLoaded to ensure DOM is loaded before running my index.js file

document.addEventListener("DOMContentLoaded", function() {
    
//Render one movie
function renderOneMovie(movie) {
    movieDetails.innerHTML = "detailed-info";
    const { resultType, title, description } = movies;
    const movieElement = document.getElementById("results")
    movieElement.innerHTML = `
    <img
    src="${resultType + title + description}"
    alt="${id}"`
}

const main = document.getElementById("detailed-info")
const movieImage = document.getElementById("image")
const movieSearch = document.getElementById("search-movie")

//adding event listeners  - click
searchBar.addEventListener("click", () => {
    const searchInput = document.getElementById("search results")
})

//Fetch requests
//Get fetch requests for all our movies

function fetchAllMovies() {
    fetch("https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010")
    .then(response => response.json())
    .then(movieDetails=> movieDetails.forEach((movies) => {
        renderOneMovie(movies)
    }))
}

    //Initial render - render movies to the DOM

    function initialize() {
        fetchAllMovies()
        //console.log("after fetch returns")
        //data.forEach(movie => renderOneMovie(movie))
    }

//Reset search
    let form= document.querySelector('movie-form')
    form.addEventListener('submit', (event) => {
    event.preventDefault()
    toSearch(event.target.movie-form.value)
    form.reset()
    })
})
