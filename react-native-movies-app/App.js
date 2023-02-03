import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/layout/Header";
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/components/stacks/AppStack";
import TabStack from "./src/components/stacks/TabStack";

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      {/* <RecipesContainer /> */}
      <TabStack />
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
};

export default App;
