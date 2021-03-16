import React, { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export const breakpoints = {
  sm: 768,
} as const;

export const screenDimensions = {
  sm: `(max-width: ${breakpoints.sm}px)`,
} as const;

const theme = {
  fontFamily: "'Roboto', sans-serif",
  fontFamilyTitle: "'Playfair Display', serif",
  colors: {
    black: "#303030",
    greyishBrown: "#424242",
    blackTwo: "#212121",
    brownishGrey: "#616161",
    brownishGreyTwo: "#757575",
    brownGrey: "#9e9e9e",
    veryLightPink: "#bdbdbd",
    veryLightPinkTwo: "#e0e0e0",
    veryLightPinkThree: "#eeeeee",
    white: "#f5f5f5",
    whiteTwo: "#fafafa",
    whiteThree: "#ffffff",
    paleGold: "#fcd86c",
    marigold: "#ffc107",
    goldenRod: "#f4ba0e",
    burntYellow: "#d8a50c",
    darkGreyBlue: "#34315d",
    red: "#d50000",
    teal: "#009688",
    offWhite: "#fff8e6",
  },
  spacing: { spacingXs: "4px", spacingS: "8px", spacingM: "12px" },
};

export type ThemeType = typeof theme;

export const AppStyles = createGlobalStyle<{ theme: ThemeType }>`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap');
html, body, button, h1, h2, h3, h4, h5, h6, li {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

* {
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fontFamily};
}
`;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
