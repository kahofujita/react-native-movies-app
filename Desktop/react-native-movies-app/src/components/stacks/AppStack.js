import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowScreen from "../screens/ShowScreen";
import TabScreen from "../screens/TabScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: "Back to List",
        }}
      >
        <Stack.Screen
          name="Tab"
          component={TabScreen}
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
          component={ShowScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
