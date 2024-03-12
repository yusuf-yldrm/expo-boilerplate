import * as React from "react";
import { StyleSheet } from "react-native";
import BasicButton from "../../components/button/button";
import AppTheme from "../../utils/theme";

interface PaywallButtonProps {
  title: string;
  onPress: () => void;
  isSelected?: boolean;
}

const PaywallButton = (props: PaywallButtonProps) => {
  return (
    <BasicButton
      title={"4.99$ " + props.title}
      onPress={props.onPress}
      textStyle={styles.textStyles}
      containerStyle={[
        styles.buttonStyle,
        props.isSelected && styles.buttonSelected,
      ]}
    />
  );
};

export default PaywallButton;

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 15,
    fontWeight: "600",
    color: AppTheme.colors.white,
  },
  buttonStyle: {
    paddingVertical: 20,
    backgroundColor: AppTheme.colors.mainBG,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 20,
  },
  buttonSelected: {
    borderWidth: 2,
    borderColor: AppTheme.colors.white,
  },
});
