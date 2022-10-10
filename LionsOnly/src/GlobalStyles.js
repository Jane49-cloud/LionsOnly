import { Dimensions, Platform, TurboModuleRegistry } from "react-native";

const { width, height } = Dimensions.get("window");
const Padding_top = Platform.OS === "ios" ? height * 0.04 : 0;
const Padding_Bottom = Platform.OS == "ios" ? height * 0.02 : 0;
const Icon_Dimensions = width * 0.085;

const BLACK = "#211F21";
const WHITE = "#FFFFFF";
const Dark_grey = "#444444";
const Light_Grey = "#707070";
const Blue = "#31C22F1";
const Orange = "#F7971C";
const Purple = "#65499E";
const Blue_Opacity = "rgba(49, 194, 241, 0.50)";

module.exports = {
  SCREEN_SIZE: {
    height,
    width,
  },
  TESTS: {
    COLORS: {
      yellow: "rgba(255, 242,0,0 0.50)",
      red: "rgba(207, 30, 36, 0.50)",
      green: "rgba(42,187, 155,0.50 )",
      blue: "rgba(0,0,0,0.50)",
    },
  },
  COLORS: {
    primary: Blue,
    secondary: Orange,
    accent: Purple,
    backgroundcolor: BLACK,
    white: WHITE,
    blueOpacity: Blue_Opacity,
    DarkGray: Dark_grey,
    Lightgrey: Light_Grey,
  },
  COMMON_STYLES: {
    ScreenContainer: {
      flex: 1,
      backgroundcolor: BLACK,
    },
    scrollViewContainer: {
      paddingLeft: width * 0.03,
      paddingRight: width * 0.03,
      padingTop: Padding_top,
      paddingBottom: Padding_Bottom,
    },
    text: {
      color: WHITE,
      fontSize: width * 0.05,
    },
    icon: {
      width: Icon_Dimensions,
      height: Icon_Dimensions,
    },
  },
};
