import React from "react";
import Link from "next/link";
import { Button } from "grommet";

import { Wrapper, Main, Footer } from "./styled";
import CardPreview from "../card-preview";

export const CardFull = ({
  title = "Missing title",
  children,
  imageUrl = "https://randomuser.me/api/portraits/med/women/50.jpg",
  description = "Missing description",
}) => {
  return (
    <Wrapper>
      <Main>
        <CardPreview
          title={title}
          imageUrl={imageUrl}
          description={description}
        />
        {children}
      </Main>

      <Footer>
        <Link href="/">
          <Button label="Go back to profiles" primary />
        </Link>
      </Footer>
    </Wrapper>
  );
};

export default CardFull;
