import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setRemoteConfig } from "../../store/store/remote-config";

interface DiscoverProps {}

const Discover = (props: DiscoverProps) => {
  const appData = useAppSelector(
    (state) => state.remoteConfig.remoteConfig.isAppStateOpen
  );

  const dispatch = useAppDispatch();

  const onPressChangeAppState = () => {
    dispatch(setRemoteConfig({ isAppStateOpen: !appData }));
  };

  return (
    <View style={styles.container}>
      <Text>
        Discover {appData ? "App State is Open" : "App State is Closed"}
      </Text>
      <Button onPress={onPressChangeAppState} title="Change App State" />
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
