import { useRef, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import BasicButton from "../../components/button/button";
import Gradient from "../../components/gradient";
import { onboardingData } from "../../constants/onboarding";
import { ScreenHeight, ScreenWidth } from "../../utils/theme";

const Onboarding = ({ navigation }) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep((prev) => prev + 1);
      flatListRef.current?.scrollToIndex({ index: currentStep + 1 });
    } else {
      // navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            style={styles.imageBG}
            resizeMode="cover"
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.flatListContainer}
      />

      <View style={styles.bottomContainer}>
        <Gradient
          toColor="rgba(14, 14, 14, 1)"
          fromColor="rgba(14, 14, 14, 0.5)"
          height={"100%"}
          opacityColor1={0}
          opacityColor2={1}
          style={styles.gradientBox}
        >
          <View style={styles.textAreaContainer}>
            <Text style={styles.title}>
              {onboardingData[currentStep].title}
            </Text>
            <Text style={styles.desc}>
              {onboardingData[currentStep].description}
            </Text>
          </View>
          <BasicButton title="Next" onPress={handleNext} />
        </Gradient>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomContainer: {
    alignItems: "center",
    position: "relative",
    justifyContent: "flex-end",
    gap: ScreenHeight * 0.04,
    paddingVertical: ScreenHeight * 0.03,
    height: ScreenHeight * 0.4,
    width: ScreenWidth,
    paddingHorizontal: ScreenWidth * 0.06,
  },
  textAreaContainer: {},
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    shadowColor: "black",
    shadowOffset: { width: 3, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    fontWeight: "700",
  },
  desc: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
  imageBG: {
    flex: 1,
    backgroundColor: "black",
    height: ScreenHeight,
    width: ScreenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContainer: {
    position: "absolute",
    height: ScreenHeight,
    width: ScreenWidth,
  },
  gradientBox: {
    position: "absolute",
    height: "100%",
    top: 0,
    right: 0,
    minHeight: ScreenHeight * 0.4,
    width: ScreenWidth,
  },
});
