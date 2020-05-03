import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { CardList } from "./index";

import mockPeople from "../../../utils/mocks/mockPeople";

console.warn("mockPeople>>>>", mockPeople);

export default {
  component: CardList,
  title: "Card list",
  decorators: [withKnobs],
};

export const withContent = () => <CardList items={mockPeople} />;
export const skeleton = () => <CardList />;
