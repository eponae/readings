import React, { FC } from "react";
import { ThemeLabelWrapper } from "./ThemeLabel.style";

const ThemeLabel: FC = ({ children }) => {
  return <ThemeLabelWrapper>{children}</ThemeLabelWrapper>;
};

export default ThemeLabel;
