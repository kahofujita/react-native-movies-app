import { Box, Select, CheckIcon } from "native-base";
import { useState } from "react";

const SelectForm = (props) => {
  const { onChangeSelectValues, defaultValue, valuesArray } = props;
  const [values, setValues] = useState([valuesArray]);
  console.log(values);
  values.map((value) => console.log(value));

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
        <Select.Item label="now_playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top_rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
      </Select>
    </Box>
  );
};

export default SelectForm;
