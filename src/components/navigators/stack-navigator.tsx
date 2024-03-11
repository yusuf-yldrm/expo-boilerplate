import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "../../screens";
import { TabNavigator } from "./tab-navigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Screens.Splash} />
        <Stack.Screen name="Discover" component={TabNavigator} />
        <Stack.Screen name="Onboarding" component={Screens.Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
