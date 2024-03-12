import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CloseIcon from "../../../assets/icons/close";
import Screens from "../../screens";
import AppTheme from "../../utils/theme";

const Tab = createBottomTabNavigator<TabStackParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: AppTheme.colors.mainBG,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Screens.Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CloseIcon
              fill={focused ? AppTheme.colors.primary : AppTheme.colors.white}
              width={20}
              height={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Screens.Settings}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CloseIcon
              fill={focused ? AppTheme.colors.primary : AppTheme.colors.white}
              width={20}
              height={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
