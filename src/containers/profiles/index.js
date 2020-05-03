import React, { useState } from "react";

import {
  CardListItem,
  CardList,
} from "../../components/presentational/card-list/styled";

import Card from "../../components/presentational/card/Card";

export const Profiles = ({ initialPeople = [] }) => {
  const [people, setProfiles] = useState([initialPeople]);

  console.warn("people >>>>", people);
  console.warn("object keys >>>>");

  return (
    <CardList>
      {Object.keys(people)}
      {people.length >= 1 &&
        people.map((i) => (
          <CardListItem key={i.id}>
            <Card />
          </CardListItem>
        ))}
    </CardList>
  );
};

// TODO: Connect to useReducer/ People Service
export default Profiles;
