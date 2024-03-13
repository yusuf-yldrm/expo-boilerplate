import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { settingsData } from "constants/settings";
import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppTheme, { ScreenHeight } from "utils/theme";
import SettingsItem from "./settings.item";

type Props = NativeStackScreenProps<
  TabStackParamList,
  "Settings",
  "NativeStack"
>;

const Settings = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.listBox}>
        <View style={styles.listHeaderBox}>
          <Text style={styles.listHeaderText}>General</Text>
        </View>
        <FlatList
          style={styles.settingsList}
          contentContainerStyle={styles.settingsListContainer}
          data={settingsData}
          keyExtractor={(item) => item.title.toString()}
          renderItem={({ item, index }) => {
            return (
              <SettingsItem
                index={index}
                title={item.title}
                onPress={() => {
                  navigation.navigate("Rating");
                }}
                iconBoxColor={item.iconBoxColor}
                icon={
                  item.icon ? (
                    <item.icon fill="white" width={20} height={20} />
                  ) : (
                    <></>
                  )
                }
                isLast={index === settingsData.length - 1}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppTheme.colors.mainBG,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: ScreenHeight * 0.1,
  },
  settingsContainer: {
    width: "100%",
    height: ScreenHeight * 0.6,
    backgroundColor: AppTheme.colors.primary,
  },
  listBox: {
    height: ScreenHeight * 0.3,
  },
  settingsList: {
    flexGrow: 0,
    width: "100%",
    backgroundColor: "#1B1D20",
    borderRadius: 12,
  },
  settingsListContainer: {
    justifyContent: "center",
    width: "100%",
  },
  listHeaderBox: {
    paddingBottom: 10,
  },
  listHeaderText: {
    color: AppTheme.colors.white,
    fontSize: 12,
    opacity: 0.6,
  },
});
