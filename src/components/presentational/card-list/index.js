import React from "react";

import CardPreview from "../card-preview/index";

import { Wrapper, CardListItem } from "./styled";

export const CardList = ({ items = [] }) => {
  return (
    <Wrapper>
      {items.length >= 1 &&
        items.map(({ name, email, picture, location }) => (
          <CardListItem key={email}>
            <CardPreview
              title={`${name.title} ${name.first} ${name.last}`}
              imageUrl={picture.medium}
              description={location.city}
            />
          </CardListItem>
        ))}
    </Wrapper>
  );
};

export default CardList;
