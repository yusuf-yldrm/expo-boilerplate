import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AppTheme from "../../utils/theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const BasicButton = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}> {props.title}</Text>
    </TouchableOpacity>
  );
};

export default BasicButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppTheme.colors.white,
    paddingVertical: 15,
    borderRadius: 100,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: AppTheme.colors.black,
    fontSize: 22,
    fontWeight: "bold",
  },
});
