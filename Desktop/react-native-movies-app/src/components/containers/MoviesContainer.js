import { Box, Center, Container, VStack } from "native-base";
import { useState, useEffect } from "react";
import SelectForm from "../forms/SelectForm";
import Loading from "../layout/Loading";
import DataList from "../lists/DataList";
import { getMovies } from "../services/api";

const MoviesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [select, setSelect] = useState("popular");

  const handleSelectValues = (select) => {
    setSelect(select);
    fetchMovies(select);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchMovies(select);
    setIsLoading(false);
  }, []);

  const fetchMovies = async (select) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${select}?api_key=d4606750b3b8eff8cd6edc457f8ed389&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((movies) => {
        const moviesArray = movies.results;
        setMovies(moviesArray);
      });
  };

  return (
    <Box m={3}>
      <Center m={3}>
        <SelectForm
          defaultValue={select}
          onChangeSelectValues={handleSelectValues}
        />
      </Center>
      <VStack width="100%">
        {isLoading ? (
          <Loading />
        ) : (
          <DataList data={movies} navigation={navigation} type="movie" />
        )}
      </VStack>
    </Box>
  );
};

export default MoviesContainer;
