import axios from "axios"

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

const apiKey = "36a03f1455514d20be8aff6b16886aa2"

export const fetchTrending = () => {
  console.log("moviesApi.fetchTrending")
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
    .then((res) => res.data.results)
}

export const fetchWithSearchQuery = (searchQuery) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    )
    .then((res) => res.data.results)
}

export const fetchMovieDetails = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
    .then((res) => res.data)
}

export const fetchMovieCast = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    )
    .then((res) => res.data.cast)
}

export const fetchMovieReviews = (movieId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
    )
    .then((res) => res.data.results)
}
