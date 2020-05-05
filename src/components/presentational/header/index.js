import React from "react";
import { Heading } from "grommet";

import { Wrapper } from "./styled";

export const Header = ({ title }) => {
  return (
    <Wrapper>
      <Heading margin="none">{title}</Heading>
    </Wrapper>
  );
};

export default Header;
