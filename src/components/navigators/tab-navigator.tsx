import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screens from "../../screens";

const Tab = createBottomTabNavigator<TabStackParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Screens.Discover} />
    </Tab.Navigator>
  );
}
