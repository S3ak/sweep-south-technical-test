import React from "react";
import Link from "next/link";

import CardPreview from "../card-preview";

import { Wrapper, CardListItem } from "./styled";

export const CardList = ({ items = [] }) => {
  // Pull items from state
  return (
    <Wrapper>
      {items.length >= 1 &&
        items.map(({ name, login, picture, location }) => (
          <CardListItem key={login.uuid}>
            <Link href={`/profiles/${login.uuid}`}>
              {/* FIXME: anchor is styling all descendant text */}
              <a>
                <CardPreview
                  title={`${name.title} ${name.first} ${name.last}`}
                  imageUrl={picture.large}
                  description={location.city}
                />
              </a>
            </Link>
          </CardListItem>
        ))}
    </Wrapper>
  );
};

export default CardList;
