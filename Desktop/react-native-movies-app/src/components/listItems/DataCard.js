import { Box, Button, Center, Heading, Image, HStack, Text } from "native-base";

const DataCard = (props) => {
  const { id, image, title, popularity, releaseDate, navigation, type } = props;
  const imageURL = "https://image.tmdb.org/t/p/w500";
  return (
    <Box>
      <HStack space={3} justifyContent="left" m="2.5">
        <Image
          alt={!image ? "No image found" : title}
          source={{ uri: imageURL + image }}
          size="xl"
        />
        <Box alignItems="left">
          <Heading size="xs">{title}</Heading>
          <Text>Popularity: {popularity}</Text>
          <Text>Release Date: {releaseDate}</Text>
          <Button
            onPress={() => {
              navigation.navigate("Show", {
                type: type,
                Id: id,
                title: title,
              });
            }}
            w={200}
          >
            More Details
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};

export default DataCard;
