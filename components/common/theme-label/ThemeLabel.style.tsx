import styled from "styled-components";

export const ThemeLabelWrapper = styled.div`
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: ${({ theme }) => theme.colors.brownishGrey};
`;
