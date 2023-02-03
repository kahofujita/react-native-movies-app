import { createStackNavigator } from "@react-navigation/stack";
import MoviesContainer from "../containers/MoviesContainer";
import MovieContainer from "../containers/MovieContainer";

const Stack = createStackNavigator();

const MoviesScreen = ({ navigation, route }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="aaaaa" component={MoviesContainer} />
      <Stack.Screen name="bbbbb" component={MovieContainer} />
      {/* <MoviesContainer navigation={navigation} route={route} /> */}
    </Stack.Navigator>
  );
};

export default MoviesScreen;
