import styled from "styled-components";
import { theme } from "styled-tools";

export const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  background: white;
`;

export const Main = styled.article`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: ${theme("spacing.base", "1rem")};
`;

export const Footer = styled.article`
  width: 100%;
  padding: ${theme("spacing.base", "1rem")};
  display: flex;
  justify-content: center;
`;
