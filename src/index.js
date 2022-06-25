//DOMContentLoaded to ensure DOM is loaded before running my index.js file

document.addEventListener("DOMContentLoaded", function() {
    displayAllMovies()
})

const apiURL = "https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010"

const imagePath = "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg";

baseUrl(url)
url = "http://localhost:3000/movies"



const movieDetails = document.getElementById("detailed-info");
const form = document.getElementById("movie-form");
const searchMovies = document.getElementById("search-movie")


//Fetch requests
//Get Fetch requests for all our movies resources

searchMovies(apiURL);
async function searchMovies(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    displayMovies(responseData.results);
};

function displayMoviesMovies() {
    movieDetails.innerHTML = "";
    const { resultType, title, description } = movie;
    const movieElement = document.getElementById("results")
    movieElement.innerHTML = `
    <img
    src="${resultType + title + description}"
    alt="${id}"`
}

//adding event listeners  - click
searchResults.addEventListener("click", () => {
const movieForm = document.getElementById("results")

//Form reset

let form = document.querySelector("movie-form")
addEventListener("submit", (event) => {
event.preventDefault()
toSearch(event.target.movie-form.value)
formReset()
})

//Reset search
function toSearch(event) {
let input = document.querySelector("movie-form")
let button = document.getElementById("button")
input.appendChild("reset-btn")
input.textContent = document.querySelector("Reset Search").value
let form = document.querySelector("#movie-form")
document.querySelector("movie-form").addEventListener("submit", toSearch)
}
})


