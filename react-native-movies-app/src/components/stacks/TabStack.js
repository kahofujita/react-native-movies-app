import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieContainer from "../containers/MovieContainer";
import MoviesContainer from "../containers/MoviesContainer";
import MoviesScreen from "../screens/MoviesScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import TVShowsScreen from "../screens/TVShowsScreen";

const TabStack = () => {
  const Tab = createMaterialTopTabNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Movies">
          {() => (
            <Stack.Navigator>
              <Stack.Screen name="aaaa" component={MoviesContainer} />
              <Stack.Screen name="bbbb" component={MovieContainer} />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Search Results" component={SearchResultsScreen} />
        <Tab.Screen name="TV Shows" component={TVShowsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabStack;
