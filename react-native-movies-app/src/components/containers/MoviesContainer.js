import axios from "axios";
import { Center, CheckIcon, Container, Select, Box } from "native-base";
import { useState, useEffect } from "react";
import { MOVIE_URL } from "../config/api_config";
import SearchForm from "../forms/SearchForm";
import SelectForm from "../forms/SelectForm";
import Loading from "../layout/Loading";
import MoviesList from "../lists/MoviesList";
import { getMovies } from "../services/api";
import tmdb from "../services/tmdb";

const MoviesContainer = ({ navigation }) => {
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

  //   useEffect(() => {
  //     const fetchMovies = async () => {
  //       const { data } = await tmdb.get("tv/popular");
  //       consolelgo(data.results);
  //       setMovies(data.results);
  //     };
  //     fetchMovies();
  //   }, []);

  //   const showMovies = (data) => {
  //     data.forEach((movie) => {
  //       const { title, popularity, poster_path, overview } = movie;
  //       // console.log(title);
  //       // console.log(popularity);
  //     });
  //   };

  //   const fetchMovies = () => {
  //     setIsLoading(true);

  // getMovies().then(
  //   (movies) => {
  //     console.log(movies);
  //     // setMovies(movies);
  //     // setIsLoading(false);
  //     // const movieResults = movies.results;
  //     // console.log(movieResults);
  //     // console.log(movies);
  //     // movieResults.forEach((movieResult) => {
  //     //   console.log(movieResult);
  //     // });
  //   },
  //   (error) => {
  //     alert("Error", `Something went wrong! ${error}`);
  //   }
  // );

  //     // setRecipes(data);
  //     // setIsLoading(false);
  //   };

  // const fetchMovies = () => {
  //   setIsLoading(true);
  //   setMovies(data);
  //   console.log(data);
  //   setIsLoading(false);
  // };

  const handleSelectValues = (select) => {
    setSelect(select);
    fetchMovies(select);
  };

  // useEffect((select) => {
  //   handleSelectValues(select);
  //   // fetchMovies(select);
  // }, []);

  const fetchMovies = async (select) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${select}?api_key=d4606750b3b8eff8cd6edc457f8ed389&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((movies) => {
        // console.log(movies.results);
        const moviesArray = movies.results;
        setMovies(moviesArray);
        // return moviesArray;
        // showMovies(movies.results);
      });
  };

  return (
    <Container>
      <Center px={4}>
        <SelectForm
          defaultValue={select}
          onChangeSelectValues={handleSelectValues}
        />
        {/* <Box w={200}>
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
            fetchMovies={fetchMovies}
          >
            <Select.Item label="now_playing" value="now_playing" />
            <Select.Item label="popular" value="popular" />
            <Select.Item label="top_rated" value="top_rated" />
            <Select.Item label="upcoming" value="upcoming" />
          </Select>
        </Box> */}
        {isLoading ? (
          <Loading />
        ) : (
          <MoviesList movies={movies} navigation={navigation} />
        )}
      </Center>
    </Container>
  );
};

export default MoviesContainer;
