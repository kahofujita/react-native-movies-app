import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Image,
  VStack,
  HStack,
  Text,
} from "native-base";

const MovieCard = (props) => {
  const { id, image, title, popularity, releaseDate, navigation } = props;
  return (
    <HStack space={3} justifyContent="center" m="1.5">
      <Center>
        <Image alt={title} source={{ uri: image }} size="xl" />
      </Center>
      <Center alignItems="left">
        <Heading size="xs">{title}</Heading>
        <Text>Popularity: {popularity}</Text>
        <Text>Release Date: {releaseDate}</Text>
        <Button
          onPress={() => {
            navigation.navigate("bbbb", {
              movieId: id,
            });
          }}
        >
          More Details
        </Button>
      </Center>
    </HStack>
  );
};

export default MovieCard;
