/* eslint-disable prettier/prettier */
import React from "react";
import { Dimensions, PixelRatio } from "react-native";
// export const FONT_FAMILY = 'Inter-Bold.ttf';

export const Colors = {
  appWhite: "#FFFFFF",
  appPrimary: "#B5302B",
  appTextGreen: "#00C076",
  appTextGrey: "#737A91",
  appTextGrey2: "#A7B1BC",
  appActiveGrey: "#CFD3D8",
  appTextBlack: "#1C2127",
  appButtonGreen: "#25C26E",
  appButtonRed: "#FF554A",
  appBlack: "#17181B",
  appDeep: "#292D32",
  appBlue: "#507184",
  appYellow: "#FED44C",
  appTextYellow: "#FCCD29",
  appTextBlue: "#566C79",
  appLineColor: "#EAF0FE",
  buttonGrey: "#262932",
  buttonActiveGrey: "#555C63",
  frameActiveColor: "#353945",
  borderColor: "#373B3F",
  lightBg: "#F1F1F1",
  modalDarkBg: "#21262C",
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

const { width, height } = Dimensions.get("window");

export const RH = (val: number) => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * height;
    return result;
  }
};

export const RW = (val: number) => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * width;
    return result;
  }
};

export const RF = (val: number) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 4;
};

export const RR = (val: number) => {
  let result = val / 100;
  result = result * (height + width);
  return result * 0.13;
};
