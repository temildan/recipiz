import RecipeCardScreen from "./components/RecipeCardScreen";
import { View, Text } from "react-native";



export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen ABC</Text>
      <RecipeCardScreen/>
    </View>
  );
}


