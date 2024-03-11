import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screens from "../../screens";

const Tab = createBottomTabNavigator<TabStackParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Screens.Home} />
    </Tab.Navigator>
  );
}
