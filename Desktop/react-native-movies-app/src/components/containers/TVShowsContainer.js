import { Box, Center, Container, VStack } from "native-base";
import { useState, useEffect } from "react";
import SelectFormForTV from "../forms/SelectFormForTV";
import Loading from "../layout/Loading";
import DataList from "../lists/DataList";

const TVShowsContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("airing_today");

  const handleSelectValues = (select) => {
    setSelect(select);
    fetchMovies(select);
  };

  useEffect(() => {
    fetchMovies(select);
  }, []);

  const fetchMovies = async (select) => {
    fetch(
      `https://api.themoviedb.org/3/tv/${select}?api_key=d4606750b3b8eff8cd6edc457f8ed389&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  };

  return (
    <Box m={3}>
      <Center m={3}>
        <SelectFormForTV
          defaultValue={select}
          onChangeSelectValues={handleSelectValues}
        />
      </Center>
      <VStack width="100%">
        {isLoading ? (
          <Loading />
        ) : (
          <DataList data={data} navigation={navigation} type="tv" />
        )}
      </VStack>
    </Box>
  );
};

export default TVShowsContainer;
