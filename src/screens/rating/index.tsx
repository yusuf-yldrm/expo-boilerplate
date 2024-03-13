import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BasicButton from "components/button/button";
import Gradient from "components/gradient";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppTheme, { ScreenHeight, ScreenWidth } from "utils/theme";
import { RatingAbsolute } from "./rating.bg";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Rating",
  "NativeStack"
>;

const Rating = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <RatingAbsolute
        imageSource={require("../../../assets/onboarding/2.png")}
        onClose={() => {
          navigation.goBack();
        }}
      />
      <Gradient
        height={ScreenHeight * 0.2}
        fromColor="#00000000"
        toColor="#00000000"
        opacityColor1={0.3}
        opacityColor2={1}
        style={styles.gradientArea}
      >
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Love the App?</Text>
            <Text style={styles.descText}>
              Create your perfect ID/Passport photo with Passport Photo
            </Text>
          </View>
          <View style={{ height: ScreenHeight * 0.01 }} />
          <BasicButton
            title="Yes, I love it 💜"
            onPress={() => {
              navigation.goBack();
            }}
            textStyle={styles.loveButtonText}
          />

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.notNowText}>Not now</Text>
          </TouchableOpacity>
        </View>
      </Gradient>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomContainer: {
    alignItems: "center",
    width: ScreenWidth * 0.9,
    marginBottom: ScreenHeight * 0.1,
    zIndex: 2,
    gap: ScreenHeight * 0.03,
  },
  gradientArea: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  textContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  titleText: {
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
    color: AppTheme.colors.white,
  },
  descText: {
    fontSize: 17,
    textAlign: "center",
    opacity: 0.7,
    color: AppTheme.colors.white,
  },
  loveButtonText: {
    fontWeight: "600",
    fontSize: 17,
  },
  notNowText: {
    color: AppTheme.colors.white,
    fontSize: 17,
    opacity: 0.6,
  },
});
