import {
  createTheme,
  ThemeProvider as REThemeProvider,
} from "@shopify/restyle";
import * as React from "react";

export const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",
  background: "#dfe6e9",

  // http://hex2rgba.devoth.com/
  modalBackground: "rgba(99, 110, 114, 0.6)",
};

export const theme = createTheme({
  colors: {
    primary: palette.purplePrimary,
    secondary: palette.purpleLight,
    background: palette.background,
    white: palette.white,
    black: palette.black,
    modalBackground: palette.modalBackground,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    none: 0,
    normal: 4,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
    },
    header: {},
  },
  buttonVariants: {
    defaults: {
      borderRadius: "normal",
    },
    primary: {
      backgroundColor: "primary",
    },
    ghost: {
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "primary",
    },
  },
});

export type Theme = typeof theme;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <REThemeProvider theme={theme}>{children}</REThemeProvider>
);
