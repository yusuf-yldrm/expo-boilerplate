import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BasicButton from "../../components/button/button";
import Gradient from "../../components/gradient";
import { paywallButtons } from "../../constants/paywall";
import AppTheme, { ScreenHeight, ScreenWidth } from "../../utils/theme";
import { PaywallAbsolute } from "./paywall.bg";
import PaywallButton from "./paywall.button";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "Splash",
  "NativeStack"
>;

const Paywall: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(null);

  const onClose = () => {
    props.navigation.goBack();
  };

  const onPaywallButtonPress = (packageId: string, index: number) => {
    // TODO: implement payment process
    // start payment process
    setSelected(index);
  };

  const onContinuePress = () => {
    if (selected === null) {
      return;
    }

    onClose();
  };

  return (
    <View style={styles.container}>
      <PaywallAbsolute
        imageSource={require("../../../assets/paywall/1.png")}
        onClose={onClose}
      />
      <Gradient
        height={ScreenHeight * 0.2}
        fromColor="#00000000"
        toColor="#00000000"
        opacityColor1={0.3}
        opacityColor2={1}
        style={styles.gradientArea}
      >
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Access all edits</Text>
            <Text style={styles.descText}>
              Upgrade to save high quality photo,and unlock all features ⭐
            </Text>
          </View>
          <FlatList
            style={styles.flatList}
            data={paywallButtons}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            renderItem={({ item, index }) => (
              <PaywallButton
                title={item.title}
                onPress={() => {
                  onPaywallButtonPress(item.packageId, index);
                }}
                isSelected={selected === index}
              />
            )}
          />
          <BasicButton
            title="Continue"
            onPress={onClose}
            textStyle={styles.purchaseButtonText}
          />
        </View>
      </Gradient>
    </View>
  );
};

export default Paywall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomContainer: {
    alignItems: "center",
    width: ScreenWidth * 0.9,
    marginBottom: ScreenHeight * 0.1,
    zIndex: 2,
    gap: ScreenHeight * 0.05,
  },
  textContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  titleText: {
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold",
    color: AppTheme.colors.white,
  },
  descText: {
    fontSize: 17,
    textAlign: "center",
    opacity: 0.7,
    color: AppTheme.colors.white,
  },
  gradientArea: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  purchaseButtonText: {
    fontWeight: "600",
  },
  flatList: {
    width: "100%",
  },
});
