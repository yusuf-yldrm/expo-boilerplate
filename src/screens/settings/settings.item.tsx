import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNavigationContainerRef } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import ArrowIcon from "../../../assets/icons/arrow";

interface SettingsItemProps {
  title: string;
  icon: React.JSX.Element;
  onPress: () => void;
  isLast?: boolean;
  iconBoxColor?: string;
  index: number;
}

export const navigationRef = createNavigationContainerRef();

const SettingsItem = ({
  title,
  icon,
  onPress,
  isLast,
  iconBoxColor,
  index,
}: SettingsItemProps) => {
  return (
    <TouchableHighlight
      onPress={() => {
        if (index === 0) {
          AsyncStorage.clear();
        } else {
          onPress();
        }
      }}
    >
      <View
        style={[
          styles.container,
          isLast && {
            borderBottomWidth: 0,
          },
        ]}
      >
        <View style={styles.settingsTile}>
          <View
            style={[
              styles.iconBox,
              iconBoxColor && { backgroundColor: "#" + iconBoxColor },
            ]}
          >
            {icon}
          </View>

          <Text style={styles.listItemText}>{title}</Text>
        </View>
        <ArrowIcon />
      </View>
    </TouchableHighlight>
  );
};

export default SettingsItem;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderBottomWidth: 1,
    width: "100%",
    justifyContent: "space-between",
  },
  settingsTile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  listItemText: {
    color: "white",
    fontSize: 17,
  },
  iconBox: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
