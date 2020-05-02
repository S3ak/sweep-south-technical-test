import React from "react";
import Card from "./Card";

import { mockCard } from "../../../utils/mocks/card";

export default {
  component: Card,
  title: "Card",
};

export const standard = () => <Card {...mockCard} />;
export const skeleton = () => <Card />;
