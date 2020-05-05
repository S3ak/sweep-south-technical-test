import React from "react";
import styled from "styled-components";
import GlobalStyles from "./../../styles/global";

export const WithGlobalStyling = ({ children }) => (
  <GlobalStyles>{children}</GlobalStyles>
);

export default WithGlobalStyling;
