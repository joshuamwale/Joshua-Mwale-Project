document.addEventListener("DOMContentLoaded", () => {
    displayMovies()
})

displayMovies(movieDetails);
let API = "https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010"
    //filling in the function
    function displayMovies(movieDetails) {
        const response = fetch("https://imdb-api.com/en/API/SearchMovie/k_6rxyo4au/inception%202010");
    const movieDetails = response.json();
    console.log(movieDetails);
    displayMovies(movieDetails.results)
    

const movieDetails = document.getElementById("detailed-info");
const form = document.getElementById("movie-form");
const searchMovies = document.getElementById("search-movie")

const characterImage = document.getElementById("image")
characterImage.innerText = movieDetails.results
 
//adding event listeners
    }

