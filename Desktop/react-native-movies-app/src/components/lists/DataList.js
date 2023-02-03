import { FlatList } from "native-base";
import DataCard from "../listItems/DataCard";

const DataList = ({ navigation, data, type }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <DataCard
          id={item.id}
          image={item.poster_path}
          title={item.title || item.name}
          popularity={item.popularity}
          releaseDate={item.release_date || item.first_air_date}
          type={type}
          navigation={navigation}
        />
      )}
    />
  );
};

export default DataList;
