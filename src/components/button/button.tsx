import * as React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import AppTheme from "../../utils/theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: object;
  containerStyle?: object;
}

const BasicButton = (props: ButtonProps) => {
  const containerStyles = [styles.container, props.containerStyle];

  const textStyles = [styles.text, props.textStyle];
  return (
    <TouchableHighlight onPress={props.onPress} style={containerStyles}>
      <Text style={textStyles}> {props.title}</Text>
    </TouchableHighlight>
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
