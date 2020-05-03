import React, { useState } from "react";

import CardList from "../../presentational/card-list/index";

export const Profiles = ({ initialPeople = [] }) => {
  const [people] = useState(initialPeople);

  return <CardList items={people} />;
};

// TODO: Connect to useReducer/ People Service
export default Profiles;
