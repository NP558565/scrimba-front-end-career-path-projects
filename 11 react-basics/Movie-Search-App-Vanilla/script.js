const btnSearch = document.getElementById("btn-search");
const refreshBtn = document.getElementById("refresh");

const innerContent = document.querySelector(".inner-content");

const hideSearch = document.getElementById("hide-search");

const formInput = document.getElementById("form-input");
let movieSearch = document.getElementById("movie-search");

const topRated = document.getElementById("top-rated-content");
const popular = document.getElementById("popular");
const trendingDay = document.getElementById("trending-day");
const trendingWeek = document.getElementById("trending-week");

const genreListing = document.getElementById("genre-listing");

var genreLinks = document.getElementsByClassName("genre-link");

const categories = ["Top", "Popular", "Trending(24H)", "Trending(Week)"];
// Generate search result on click of the search button
btnSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  innerContent.innerHTML = "";
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=26a6b31e195956f2c2c9952d0d5eb3f3&language=en-US&query=${movieSearch.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      console.log(data);

      for (data of data.results) {
        if (data.poster_path) {
          innerContent.innerHTML += `
              <div class="card-content">
              <div class="img-content">
                <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="Movie Image" class = 'thumbnail-img'/>
              </div>

              <div class="details-content">
              <p class="card-rating text-red"> Rating: ${data.vote_average}</p>
                <h1 class="card-title">${data.original_title}</h1>
               <p class="overview">${data.overview}</p>
                <p class="release-date">Release Date: ${data.release_date}</p>

              </div>
            </div>
            `;
        }
        movieSearch.value = "";
      }
    })
    .catch((err) => {
      console.error(err);
      innerContent.innerHTML += `Movie not found...`;
    });
});

//movie genres
function getAllMovieGenres() {
  for (category of categories) {
    genreListing.innerHTML += `
      <a href = #gen-${category} class = "genre-link">${category}</a>
      `;
  }
}

// TV genre list
fetch(
  `https://api.themoviedb.org/3/genre/tv/list?api_key=26a6b31e195956f2c2c9952d0d5eb3f3&language=en-US&query=${movieSearch.value}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

//Get Popular movies

async function getPopularMovies() {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=26a6b31e195956f2c2c9952d0d5eb3f3&language=en-US}`
  );

  let data = await response.json();

  for (data of data.results) {
    popular.innerHTML += `
      <img src = https://image.tmdb.org/t/p/original/${data.poster_path} class = "thumbnail"/>
    `;
  }
}
// Get Top rated movies

async function getTopRatedMovies() {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=26a6b31e195956f2c2c9952d0d5eb3f3&language=en-US}`
  );
  let data = await response.json();

  for (data of data.results) {
    topRated.innerHTML += `
      <img src = https://image.tmdb.org/t/p/original/${data.poster_path} class = "thumbnail"/>
    `;
  }
}

// get Daily trends

async function getDailyTrends() {
  let response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=26a6b31e195956f2c2c9952d0d5eb3f3&language=en-US}`
  );

  let data = await response.json();
  for (data of data.results) {
    trendingDay.innerHTML += `
      <img src = https://image.tmdb.org/t/p/original/${data.poster_path} class = "thumbnail"/>
    `;
  }
}

// Get weekly trends
async function getWeeklyTrends() {
  let response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=26a6b31e195956f2c2c9952d0d5eb3f3&language=en-US}`
  );
  let data = await response.json();

  for (data of data.results) {
    trendingWeek.innerHTML += `
      <img src = https://image.tmdb.org/t/p/original/${data.poster_path} class = "thumbnail"/>
    `;
  }
}

getAllMovieGenres();
getTopRatedMovies();
getPopularMovies();
getDailyTrends();
getWeeklyTrends();
