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
  Box,
} from "native-base";
import { useState } from "react";

const SearchForm = (props) => {
  const { fetchMovies, onInputChange, placeholder, value } = props;

  return (
    <Box>
      <Input
        value={value}
        placeholder={placeholder}
        variant="filled"
        bg="gray.200"
        px={3}
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
        }}
      />
    </Box>
  );
};

export default SearchForm;
