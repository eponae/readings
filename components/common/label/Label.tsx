import React, { FC } from "react";
import { LabelWrapper } from "./Label.style";

const Label: FC = ({ children }) => {
  return <LabelWrapper>{children}</LabelWrapper>;
};

export default Label;
