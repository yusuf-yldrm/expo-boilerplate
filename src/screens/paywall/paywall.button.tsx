import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface PaywallButtonProps {}

const PaywallButton = (props: PaywallButtonProps) => {
  return (
    <View style={styles.container}>
      <Text>PaywallButton</Text>
    </View>
  );
};

export default PaywallButton;

const styles = StyleSheet.create({
  container: {},
});
