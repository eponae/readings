import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterImage = styled.img`
  margin-left: 0.5rem;
`;

export const FooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 1em;
`;
