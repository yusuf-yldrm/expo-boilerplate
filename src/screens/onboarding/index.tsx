import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Onboarding = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <View style={styles.container}>
      <Text>{currentStep}</Text>
      <Button onPress={handleNext} title="Next" />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
