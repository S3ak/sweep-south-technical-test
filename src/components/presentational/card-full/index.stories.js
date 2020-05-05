import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import CardFull from "./index";

import { mockCard } from "../../../utils/mocks/card";

export default {
  component: CardFull,
  title: "Card Full scene",
  decorators: [withKnobs],
};

const { title, description, imageUrl } = mockCard;

export const withContent = () => (
  <CardFull
    title={text("title", title)}
    description={text("description", description)}
    imageUrl={text("image url", imageUrl)}
    uuid="random"
  />
);

export const skeleton = () => <CardFull />;
