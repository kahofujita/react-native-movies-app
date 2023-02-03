import { Box, Select, CheckIcon } from "native-base";

const SelectForm = (props) => {
  const { onChangeSelectValues, defaultValue } = props;

  return (
    <Box w={200}>
      <Select
        selectedValue={defaultValue}
        accessibilityLabel={defaultValue}
        placeholder={defaultValue}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => onChangeSelectValues(itemValue)}
        // fetchMovies={fetchMovies}
      >
        <Select.Item label="now_playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top_rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
      </Select>
    </Box>
  );
};

export default SelectForm;
