import React, { useState } from "react";

import { getUUID } from "../../utils/helpers";

import {
  CardListItem,
  CardList,
} from "../../components/presentational/card-list/styled";

import Card from "../../components/presentational/card/Card";

export const Profiles = ({ initialPeople = [] }) => {
  const [people] = useState(initialPeople);

  return (
    <CardList>
      {people.length >= 1 &&
        people.map(
          ({
            email = "email@mail.com",
            title = "Missing title",
            imageUrl = "https://images.unsplash.com/photo-1588417487179-55a8b349321e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80",
            description = "lorem ipsum",
          }) => (
            <CardListItem key={email}>
              <Card
                title={title}
                imageUrl={imageUrl}
                description={description}
              />
            </CardListItem>
          )
        )}
    </CardList>
  );
};

// TODO: Connect to useReducer/ People Service
export default Profiles;
