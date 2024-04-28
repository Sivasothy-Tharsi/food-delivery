import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

 export const COLORS = {
    darkGreen: "#229879",
    darkLime: "#148871",
    lightLime: "#88D6C5",
    lime: "#2AD699",
    lightGreen: "#E7F9EF",
    
    white: "#fff",
    white2: "#F9F9F9",
    black: "#020202",
    blue: "#4096FE",
    gray: "#877777",
    gray2: "#F8F8F8",
    gray3: "D9D9D9",
    lightGray: "#F5F6FB",
    lightGray2: "#757575",
    lightGray3: "#D3D3D3",
    darkgray: "#3B3F4B",
    glass: "#CBEFEC",
    
    box1: "#FCE8FF",
    box2: "#F1FFDB",
    box3: "#76D7C4",
    boxColor: "#210B61",

    btn: "#B98A4E",
    catBtnOn: "#BBF5D5",
    
    transparentBlack1: "rgba(2, 2, 2, 0.1)",
    transparentBlack3: "rgba(2, 2, 2, 0.3)",
    transparentBlacks: "rgba(2, 2, 2, 0.5)",
    transparentBlack7: "rgba(2, 2, 2, 0.7)",
    transparentBlack9: "rgba(2, 2, 2, 0.9)",

    transparentGray: "rgba(77,77,77, 0.8)",
    transparentDarkGray: "rgba(20,20,20, 0.9)",

    transparent: "transparent",
};


 export const SIZES = {
    // global size
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    //app dimensions
    width,
    height
}

export const FONTS = {
    largeTitle: {fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle},
    h1: {fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 30},
    body5: {fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lightGreen: 22},
    
}

const appThem = {COLORS, SIZES, FONTS};

export default appThem;
