import React, { FC } from "react";
import { ArticleTitleWrapper } from "./ArticleTitle.style";

const ArticleTitle: FC = ({ children }) => {
  return <ArticleTitleWrapper>{children}</ArticleTitleWrapper>;
};

export default ArticleTitle;
