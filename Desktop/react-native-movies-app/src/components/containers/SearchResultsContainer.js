import {
  Button,
  Center,
  Container,
  FormControl,
  Text,
  HStack,
  Box,
  VStack,
  Icon,
  Ionicons,
} from "native-base";
import { useState } from "react";
import { API_KEY, BASE_URL } from "../config/api_config";
import SearchForm from "../forms/SearchForm";
import SelectFormForSearch from "../forms/SelectFormForSearch";
import DataList from "../lists/DataList";

const SearchResultsContainer = ({ navigation }) => {
  const [data, setData] = useState(data);
  const [select, setSelect] = useState("multi");
  const [value, setValue] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSelectValues = (select) => {
    setSelect(select);
    fetchMovies(select);
  };

  const handleInputValue = (value) => {
    setValue(value);
  };

  const validate = () => {
    if (value === "") {
      setErrors(true);
    } else {
      setErrors(false);
    }
  };

  const onSubmit = () => {
    validate();
    fetchMovies(select, value);
  };

  const fetchMovies = async (select, value) => {
    fetch(`${BASE_URL}/search/${select}?${API_KEY}&page=1&query=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  };

  return (
    <Box m={3}>
      <Center m={3}>
        <FormControl isRequired>
          <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
          <SearchForm
            placeholder="i.e. James Bond, CSI"
            onInputChange={handleInputValue}
            value={value}
          />
          <FormControl.Label>Choose Search Type</FormControl.Label>
          <HStack space={3} marginTop={2} marginBottom={2}>
            <SelectFormForSearch
              defaultValue={select}
              onChangeSelectValues={handleSelectValues}
            />
            <Button onPress={onSubmit}>Search</Button>
          </HStack>
          <Text>Please select a search type</Text>
        </FormControl>
      </Center>
      <VStack width="100%">
        {errors ? (
          <Text m={3}>Movie/TV Show Name is required</Text>
        ) : (
          <DataList data={data} navigation={navigation} type={select} />
        )}
      </VStack>
    </Box>
  );
};

export default SearchResultsContainer;
