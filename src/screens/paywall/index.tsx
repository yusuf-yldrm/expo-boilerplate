import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import BasicButton from "../../components/button/button";
import Gradient from "../../components/gradient";
import AppTheme, { ScreenHeight, ScreenWidth } from "../../utils/theme";
import { PaywallAbsolute } from "./paywall.bg";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Splash",
  "NativeStack"
>;

type PaywallAbsoluteProps = {
  onClose: () => void;
  imageSource: ImageSourcePropType;
};

const Paywall: React.FC<Props> = (props) => {
  const onClose = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <PaywallAbsolute
        imageSource={require("../../../assets/paywall/1.png")}
        onClose={onClose}
      />
      <Gradient
        height="100%"
        fromColor="#00000000"
        toColor="#00000000"
        opacityColor1={0}
        opacityColor2={1}
        style={styles.gradientArea}
      >
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Title</Text>
            <Text style={styles.descText}>Desc</Text>
          </View>
          <BasicButton
            title="Continue"
            onPress={onClose}
            textStyle={styles.purchaseButtonText}
          />
        </View>
      </Gradient>
    </View>
  );
};

export default Paywall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomContainer: {
    alignItems: "center",
    width: ScreenWidth * 0.9,
    backgroundColor: "black",
    marginBottom: ScreenHeight * 0.1,
    zIndex: 2,
    gap: 20,
  },
  textContainer: {
    padding: 20,
    gap: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: AppTheme.colors.white,
  },
  descText: {
    fontSize: 16,
    color: AppTheme.colors.white,
  },
  gradientArea: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  purchaseButtonText: {
    fontWeight: "600",
  },
});
