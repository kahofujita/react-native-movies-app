import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesContainer from "../containers/MoviesContainer";
import SearchResultsContainer from "../containers/SearchResultsContainer";
import TVShowsContainer from "../containers/TVShowsContainer";

const TabScreen = ({ navigation }) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movies"
        component={MoviesContainer}
        navigation={navigation}
      />
      <Tab.Screen
        name="Search Results"
        component={SearchResultsContainer}
        navigation={navigation}
      />
      <Tab.Screen
        name="TV Shows"
        component={TVShowsContainer}
        navigation={navigation}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
