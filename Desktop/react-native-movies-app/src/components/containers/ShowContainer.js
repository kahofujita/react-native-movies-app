import { Box, Center, Text, Image, Heading } from "native-base";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../config/api_config";

const ShowContainer = ({ route }) => {
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const { Id, type } = route.params;

  useEffect(() => {
    setId(Id);
    fetchShowDetails(type, Id);
  }, []);

  const fetchShowDetails = async (type, id) => {
    fetch(`${BASE_URL}/${type}/${id}?${API_KEY}`)
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
