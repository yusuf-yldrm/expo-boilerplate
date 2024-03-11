import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import AppTheme from "../../utils/theme";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Splash",
  "NativeStack"
>;

const Splash: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace("Discover");
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
    backgroundColor: AppTheme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
