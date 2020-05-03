import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Card from "./index";

import { mockCard } from "../../../utils/mocks/card";

export default {
  component: Card,
  title: "Card preview",
  decorators: [withKnobs],
};

const { title, description, imageUrl } = mockCard;

export const withContent = () => (
  <Card
    title={text("title", title)}
    description={text("description", description)}
    imageUrl={text("image url", imageUrl)}
  />
);

export const skeleton = () => <Card />;
