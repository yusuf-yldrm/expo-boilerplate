import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CloseIcon from "../../../assets/icons/close";

type RatingAbsoluteProps = {
  onClose: () => void;
  imageSource: ImageSourcePropType;
};

export const RatingAbsolute = (props: RatingAbsoluteProps) => {
  return (
    <>
      <Image source={props.imageSource} style={styles.paywallBG} />
      <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
        <CloseIcon fill={"#000000"} width={14} height={14} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  paywallBG: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    padding: 12,
    zIndex: 100,
    opacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
  },
});
