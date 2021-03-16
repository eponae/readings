import React, { FC } from "react";
import { TitleWrapper } from "./Title.style";

const Title: FC = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;
