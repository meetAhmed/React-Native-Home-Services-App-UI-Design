import { createNativeStackNavigator } from '@react-navigation/native-stack';

// local
import HomeScreen from '../screens/HomeScreen';
import CategoryDetails from '../screens/CategoryDetails';

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="category-details" component={CategoryDetails} />
        </Stack.Navigator>
    )
}