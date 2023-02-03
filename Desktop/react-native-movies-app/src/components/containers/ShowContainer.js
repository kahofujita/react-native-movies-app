import { Box, Center, Text, Image, Heading } from "native-base";
import { useState, useEffect } from "react";

const ShowContainer = ({ route }) => {
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const { Id, type } = route.params;

  useEffect(() => {
    setId(Id);
    fetchShowDetails(type, Id);
  }, []);

  const fetchShowDetails = async (type, id) => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=d4606750b3b8eff8cd6edc457f8ed389&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <>
      <Box width="100%">
        <Center>
          <Heading m={10}>{data.title || data.name}</Heading>
          {data.poster_path && (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
              }}
              alt={data.title || data.name}
              size="2xl"
              margin="auto"
            />
          )}
          <Text m={10}>{data.overview}</Text>
          <Text marginBottom={10}>
            Popularity: {data.popularity} | Release Date:{" "}
            {data.release_date || data.first_air_date}
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default ShowContainer;
