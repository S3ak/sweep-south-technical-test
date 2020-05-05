import React from "react";
import { Grommet } from "grommet";
import GlobalStyles from "./../../styles/global";

export const WithGlobalStyling = ({ children }) => (
  <Grommet>
    <GlobalStyles plain />
    {children}
  </Grommet>
);

export default WithGlobalStyling;
