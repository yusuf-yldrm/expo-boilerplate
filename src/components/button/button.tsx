import * as React from "react";
import { Button, StyleSheet } from "react-native";

interface ButtonProps {}

const BasicButton = (props: ButtonProps) => {
  return (
    <Button
      title="Press me"
      onPress={() => {
        alert("Button pressed");
      }}
    />
  );
};

export default BasicButton;

const styles = StyleSheet.create({
  container: {},
});
