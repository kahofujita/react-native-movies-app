let movie_id;
let select;
let tv_id;
let query;

export const API_KEY = "api_key=d4606750b3b8eff8cd6edc457f8ed389";
export const BASE_URL = "https://api.themoviedb.org/3";

// Movies endpoints
export const MOVIE_DETAIL_URL =
  BASE_URL + `/movie/${movie_id}?` + API_KEY + "&language=en-US";
export const MOVIE_NOW_PLAYING_URL =
  BASE_URL + "/movie/now_playing?" + API_KEY + "&page=1";
export const MOVIE_POPULAR_URL =
  BASE_URL + "/movie/popular?" + API_KEY + "&language=en-US&page=1";
export const MOVIE_TOP_RATED_URL =
  BASE_URL + "/movie/top_rated?" + API_KEY + "&language=en-US&page=1";
export const MOVIE_UPCOMING_URL =
  BASE_URL + "/movie/upcoming?" + API_KEY + "&language=en-US&page=1";
export const MOVIE_URL =
  BASE_URL + `/movie/${select}?` + API_KEY + "&language=en-US&page=1";

// TV Shows endpoints
export const TV_DETAIL_URL =
  BASE_URL + `/tv/${tv_id}?` + API_KEY + "&language=en-US";
export const TV_AIRING_TODAY_URL =
  BASE_URL + "/tv/airing_today?" + API_KEY + "&language=en-US&page=1";
export const TV_ON_THE_AIR_URL =
  BASE_URL + "/tv/on_the_air?" + API_KEY + "&language=en-US&page=1";
export const TV_POPULAR_URL =
  BASE_URL + "/tv/popular?" + API_KEY + "&language=en-US&page=1";
export const TV_TOP_RATED_URL =
  BASE_URL + "/tv/top_rated?" + API_KEY + "&language=en-US&page=1";

// Search endpoints
export const SEARCH_MOVIE_URL =
  BASE_URL +
  "/search/movie?" +
  API_KEY +
  "&language=en-US&page=1&q=" +
  `${query}`;
export const SEARCH_MULTI_URL =
  BASE_URL +
  "/search/multi?" +
  API_KEY +
  "&language=en-US&page=1&q=" +
  `${query}`;
export const SEARCH_TV_URL =
  BASE_URL + "/search/tv?" + API_KEY + "&language=en-US&page=1&q=" + `${query}`;

// export const API_URL =
//   BASE_URL +
//   "/discover/movie?" +
//   API_KEY +
//   "&language=en-US&sort_by=popularity.desc";
// export const IMG_URL = "https://image.tmdb.org/t/p/w500";
