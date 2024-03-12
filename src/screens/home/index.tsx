import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import AppTheme from "../../utils/theme";

type Props = NativeStackScreenProps<TabStackParamList, "Home", "NativeStack">;

const Home: React.FC<Props> = ({ navigation }) => {
  const paywallShowTime = useAppSelector(
    (state) => state.settings.paywall_show_time
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    initializeHome();
  }, []);

  const initializeHome = () => {
    if (paywallShowTime == 0) {
      navigation.navigate("Paywall");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Paywall Show Time {paywallShowTime}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppTheme.colors.mainBG,
  },
});
