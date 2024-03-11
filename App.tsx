import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigators from "./src/components/navigators";

const Stack = createNativeStackNavigator();

export default function App() {
  return <Navigators.StackNavigator />;
}
