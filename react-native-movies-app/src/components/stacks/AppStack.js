import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoviesScreen from "../screens/MoviesScreen";
import SearchResultsScreen from "../screens/SearchResultsScreen";
import TVShowsScreen from "../screens/TVShowsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={MoviesScreen}
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Show"
          component={SearchResultsScreen}
          options={({ route }) => ({
            title: route.params.label,
          })}
        />
        <Stack.Screen name="Web" component={TVShowsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
