import { Box, Select, CheckIcon } from "native-base";

const SelectFormForTV = (props) => {
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
      >
        <Select.Item label="airing_today" value="airing_today" />
        <Select.Item label="on_the_air" value="on_the_air" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top_rated" value="top_rated" />
      </Select>
    </Box>
  );
};

export default SelectFormForTV;
