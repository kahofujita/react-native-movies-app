import { Center, Container, Select, CheckIcon } from "native-base";
import { useState } from "react";
import Loading from "../layout/Loading";
import MoviesList from "../lists/MoviesList";

const TVShowsContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [select, setSelect] = useState("popular");

  const data = [
    {
      poster_path:
        "https://www.hollywoodreporter.com/wp-content/uploads/2021/05/the-boss-baby-family-business-BB2_Tsr1Sheet10_RGB_2_rgb-copy.jpg?w=1296&h=730&crop=1",
      title: "The Boss Baby",
      popularity: 1000.0,
      release_date: "2020-01-01",
      overview: "Lorem, ipsum dolor.",
    },
    {
      poster_path: "https://images.alphacoders.com/736/736461.png",
      title: "Your Name",
      popularity: 2000.0,
      release_date: "2021-01-01",
      overview: "Lorem, ipsum dolor.",
    },
    {
      poster_path:
        "https://cdn.vox-cdn.com/thumbor/X1wVvTZ1us7e-6yStup5eNsRdEI=/0x0:1780x1004/1820x1213/filters:focal(748x360:1032x644):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66864686/GHI_WhisperOfTheHeart_Select3.0.jpg",
      title: "Whisper of the Heart",
      popularity: 500.0,
      release_date: "1995-01-01",
      overview: "Lorem, ipsum dolor.",
    },
  ];

  return (
    <Container>
      <Center>
        <Select
          selectedValue={select}
          accessibilityLabel={select}
          placeholder={select}
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setSelect(itemValue)}
        >
          <Select.Item label="now_playing" value="now_playing" />
          <Select.Item label="popular" value="popular" />
          <Select.Item label="top_rated" value="top_rated" />
          <Select.Item label="upcoming" value="upcoming" />
        </Select>
        {isLoading ? (
          <Loading />
        ) : (
          <MoviesList movies={movies} navigation={navigation} />
        )}
      </Center>
    </Container>
  );
};

export default TVShowsContainer;
