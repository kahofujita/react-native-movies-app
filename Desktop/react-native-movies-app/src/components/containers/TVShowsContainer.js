import { Box, Center, Container, VStack } from "native-base";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../config/api_config";
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
    fetch(`${BASE_URL}/tv/${select}?${API_KEY}&page=1`)
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
