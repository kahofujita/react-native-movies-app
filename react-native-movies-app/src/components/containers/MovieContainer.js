import axios from "axios";
import { Box, Button, Center, Text, Image } from "native-base";
import { useState, useEffect } from "react";

const MovieContainer = ({ route }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const [id, setId] = useState(null);
  const [movie, setMovie] = useState([]);
  const { movieId } = route.params;

  useEffect(() => {
    setId(movieId);
    fetchMovieDetails(movieId);
  }, []);

  const fetchMovieDetails = async (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d4606750b3b8eff8cd6edc457f8ed389&language=en-US`
    )
      .then((res) => res.json())
      .then((movie) => {
        console.log(imageUrl + movie.poster_path);
        setMovie(movie);
      });
  };

  return (
    <>
      <Box width="100%">
        <Center py={10}>
          <Text>{movie.title}</Text>
          <Image alt={movie.title} source={{ uri: imageUrl + movie.poster_path }} size="xl" />
          <Text>{movie.overview}</Text>
          <Text>Popularity: {movie.popularity} | </Text>
          <Text>Release Date: {movie.release_date}</Text>
        </Center>
      </Box>
    </>
  );
};

export default MovieContainer;
