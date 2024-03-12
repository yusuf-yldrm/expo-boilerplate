import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useAppSelector } from "../../store/hooks";
import AppTheme from "../../utils/theme";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Splash",
  "NativeStack"
>;

const Splash: React.FC<Props> = ({ navigation }) => {
  const isAppFirstOpen = useAppSelector(
    (state) => state.settings.is_first_open
  );

  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    setTimeout(() => {
      if (isAppFirstOpen) {
        navigation.replace("Onboarding");
      } else {
        navigation.replace("Discover");
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/icon.png")} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.colors.mainBG,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
