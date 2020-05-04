import React from "react";

import CardPreview from "../card-preview";

import { Wrapper, CardListItem } from "./styled";

export const CardList = ({ items = [] }) => {
  return (
    <Wrapper>
      {items.length >= 1 &&
        items.map(({ name, login, picture, location }) => (
          <CardListItem key={login.uuid}>
            <CardPreview
              title={`${name.title} ${name.first} ${name.last}`}
              imageUrl={picture.medium}
              description={location.city}
              uuid={login.uuid}
            />
          </CardListItem>
        ))}
    </Wrapper>
  );
};

export default CardList;
