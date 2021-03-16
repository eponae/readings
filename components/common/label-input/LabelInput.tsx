import React, { FC } from "react";
import { LabelInputWrapper } from "./LabelInput.style";

const LabelInput: FC = ({ children }) => {
  return <LabelInputWrapper>{children}</LabelInputWrapper>;
};

export default LabelInput;
