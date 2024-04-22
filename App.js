import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigation/TabNavigation";
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}