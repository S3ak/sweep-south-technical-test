import React from "react";

import Header from "../header";
import Footer from "../footer";
import Main from "../main";

import { Wrapper } from "./styled";

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header title="Welcome" />
      <Main>{children}</Main>
      <Footer>Built with ❤ by Monde Sineke.</Footer>
    </Wrapper>
  );
};

export default Layout;
