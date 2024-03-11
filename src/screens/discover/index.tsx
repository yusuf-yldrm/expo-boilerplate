import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface DiscoverProps {}

const Discover = (props: DiscoverProps) => {
  return (
    <View style={styles.container}>
      <Text>Discover</Text>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {},
});
