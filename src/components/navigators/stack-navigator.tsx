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
        <Stack.Screen
          name="Rating"
          component={Screens.Rating}
          options={{
            presentation: "formSheet",
          }}
        />
        <Stack.Screen
          name="Paywall"
          component={Screens.Paywall}
          options={{
            presentation: "fullScreenModal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
