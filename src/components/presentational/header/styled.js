import styled from "styled-components";
import { theme } from "styled-tools";

export const Wrapper = styled.section`
  grid-area: header;
  width: 100%;
  padding: ${theme("spacing.base", "1rem")};
`;
