import React from "react";

import Header from "../header";
import Footer from "../footer";
import Main from "../main";

import { Wrapper } from "./styled";

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <h1>Welcome</h1>
      </Header>
      <Main>{children}</Main>
      <Footer>Built with ❤ by Monde Sineke.</Footer>
    </Wrapper>
  );
};

export default Layout;
