import { Box, Select, CheckIcon } from "native-base";

const SelectFormForSearch = (props) => {
  const { onChangeSelectValues, defaultValue } = props;

  return (
    <Box w={230}>
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
      >
        <Select.Item label="movie" value="movie" />
        <Select.Item label="multi" value="multi" />
        <Select.Item label="tv" value="tv" />
      </Select>
    </Box>
  );
};

export default SelectFormForSearch;
