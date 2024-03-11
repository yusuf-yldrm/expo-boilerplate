import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigators from "./src/components/navigators";
import { persistor, store } from "./src/store";

export default function App() {
  // AsyncStorage.clear();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigators.StackNavigator />
      </PersistGate>
    </Provider>
  );
}
