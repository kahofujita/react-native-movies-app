import axios from "axios";
import qs from "qs";
import { MOVIE_NOW_PLAYING_URL } from "../config/api_config";

export const getMovies = async (
  popularity,
  title,
  releaseDate,
  overview,
  ingredient,
  movies,
  showMovies,
) => {
  const movie_now_playing_url = MOVIE_NOW_PLAYING_URL;

  fetch(movie_now_playing_url)
    .then((res) => res.json())
    .then((movies) => {
      console.log(movies.results);
      const moviesArray = movies.results;
      return moviesArray;
      // showMovies(movies.results);
    });

  // const showMovies = (data) => {
  //   data.forEach((movie) => {
  //     const { title, popularity, poster_path, overview } = movie;
  //     // console.log(title);
  //     // console.log(popularity);
  //   });
  // };

  // try {
  //   const params = {
  //     popularity: popularity,
  //     title: title,
  //     release_date: releaseDate,
  //     overview: overview,
  //     // q: ingredient,
  //     // app_id: APP_ID,
  //     // app_key: APP_KEY,
  //     // type: TYPE,
  //     // field: ["uri", "image", "label", "source"],
  //   };

  //   const movieAxios = axios.create({
  //     paramsSerializer: (params) =>
  //       qs.stringify(params, {
  //         arrayFormat: "repeat",
  //       }),
  //   });

  //   const response = await movieAxios.get(url, { params });

  //   console.log("RESPONSE", response.data.hits);

  //   const movies = response.data.hits;

  //   return movies;
  // } catch (error) {
  //   throw error;
  // }
};
