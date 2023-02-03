import { FlatList } from "native-base";
import MovieCard from "../listItems/MovieCard";

// const getPosterURL = (posterpath) => {
//   `https://api.themoviedb.org/t/p/w220_and_h330_face${posterpath}`;
// };

const MoviesList = ({ navigation, movies }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500"
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <MovieCard
          id={item.id}
          image={imageUrl + item.poster_path}
          title={item.title}
          popularity={item.popularity}
          releaseDate={item.release_date}
          navigation={navigation}
        />
      )}
      //   keyExtractor={(item) => item.movie.url}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MoviesList;
