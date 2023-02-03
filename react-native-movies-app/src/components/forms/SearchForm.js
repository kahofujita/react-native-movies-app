import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  VStack,
  Select,
  CheckIcon,
} from "native-base";
import { useState } from "react";

const SearchForm = (props) => {
  const { fetchMovies, onInputChange } = props;
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});

  const onSubmit = () => {
    console.log("form submitted");
    fetchMovies();
  };

  return (
    <VStack space={2} width="100%" py={5}>
      <FormControl isRequired>
        <FormControl.Label fontSize="sm">
          Search Name/TV Show Name
        </FormControl.Label>
        <HStack width="100%" space={2}>
          <Input
            placeholder="i.e. JamesBond, CSI"
            variant="filled"
            bg="gray.200"
            px={3}
            width="85%"
            InputLeftElement={
              <Icon
                size={5}
                ml={2}
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
            onChangeText={(value) => {
              onInputChange(value);
              setData({ ...formData, name: value });
            }}
          />
        </HStack>
        <FormControl.Label fontSize="sm">Choose Search Type</FormControl.Label>
        <HStack>
          <Select
            w={200}
            selectedValue="multi"
            // accessibilityLabel={select}
            placeholder="multi"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelect(itemValue)}
          >
            <Select.Item label="movie" value="movie" />
            <Select.Item label="multi" value="multi" />
          </Select>
          <Button
            onPress={onSubmit}
            startIcon={<Icon as={Ionicons} name="ios-search" />}
          >
            Search
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

export default SearchForm;
