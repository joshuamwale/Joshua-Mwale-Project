     //DOMContentLoaded to ensure DOM is loaded before running my index.js file

document.addEventListener("DOMContentLoaded", function() {
const apiurl = "https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010";

const movieDetails = document.getElementById("detailed-info");
   
//DOM Render one movie function

function renderOneMovie(movie) {
    movieDetails.innerHTML = "";
    const { resultType, title, description } = movie;
    const movieElement = document.getElementById("results")
    movieElement.innerHTML = `
    <img
    src="${resultType + title + description}"
    alt="${id}"`
}

const input = document.getElementById("search-movie")

     //adding event listeners  - click
document.querySelector('Search Results').addEventListener("click", (e) => {
    console.log(e)
})
//Fetch requests
//Get Fetch requests for all our movies resources

function displayAllMovies() {
    fetch("https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010")
    .then(response => response.json())
    .then(movieDetails => movieDetails.forEach(movie => renderOneMovie(movie)))
    console.log("before fetch returns")
}

//Initial Render - Render movies to the DOM

function initialize() {
    displayAllMovies()
    console.log('after display All Movies')
    //movieDetails.forEach(movie => renderOneMovie(movie))
}
initialize()

//Reset search
let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    toSearch(event.target.movie-form.value)
    form.reset()
})
});