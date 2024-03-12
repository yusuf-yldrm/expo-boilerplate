import { Dimensions } from "react-native";

const AppTheme = {
  colors: {
    primary: "#FFD700",
    secondary: "#FF4500",
    white: "#FFFFFF",
    black: "#000000",
    buttonBG: "#25282C",
  },
  fonts: {
    regular: "Roboto-Regular",
    bold: "Roboto-Bold",
  },
};

const ScreenWidth = Dimensions.get("window").width;
const ScreenHeight = Dimensions.get("window").height;
const ScreenRatio = ScreenWidth / ScreenHeight;
export { ScreenHeight, ScreenRatio, ScreenWidth };
export default AppTheme;
