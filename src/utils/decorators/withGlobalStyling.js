import React from "react";
import styled from "styled-components";
import { globalStyles } from "./../../styles/global";

const Wrapper = styled.div`
  ${globalStyles}
`;

export const WithGlobalStyling = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default WithGlobalStyling;
