import * as React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "../../utils/theme";

interface OnboardingStepProps {
  imageSource: ImageSourcePropType;
}

const OnboardingStep = (props: OnboardingStepProps) => {
  return (
    <Image
      source={props.imageSource}
      style={styles.container}
      // fill in the blank
      resizeMode="cover"
    />
  );
};

export default OnboardingStep;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: ScreenHeight,
    width: ScreenWidth,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
