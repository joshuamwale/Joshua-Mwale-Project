//DOMContentLoaded to ensure DOM is loaded before running my index.js file

document.addEventListener("DOMContentLoaded", function() {
    displayAllMovies()
})

const APIURL = https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010
const url = http://localhost:3000/movies

const results = document.getElementById("detailed-info");
const form = document.getElementById("movie-form");
const searchMovies = document.getElementById("search-movie")


//Fetch requests
//Get Fetch requests for all our movies resources

searchMovies(APIURL);
async function searchMovies(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    displayMovies(responseData.results);

}




displayMovies(movieDetails);
let API = "https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010"
//filling in the function
function displayMovies(movieDetails) {
const response = fetch("https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010");
const movieDetails = response.json();
console.log(movieDetails);
displayMovies(movieDetails.results)



const characterImage = document.getElementById("image")
characterImage.innerText = movieDetails.results
//adding event listeners - click
searchResults.addEventListener("click", () => {
const movieForm = document.getElementById("results")

let form = document.querySelector("movie-form")
addEventListener("submit", (event) => {
event.preventDefault()
toSearch(event.target.movie-form.value)
formReset()
})

function toSearch(event) {
let input = document.querySelector("movie-form")
let button = document.getElementById("button")
input.appendChild("reset-btn")
input.textContent = document.querySelector("Reset Search").value
let form = document.querySelector("#movie-form")
document.querySelector("movie-form").addEventListener("submit", toSearch)
}
})


