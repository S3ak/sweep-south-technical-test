import React from "react";
import PT from "prop-types";

import {
  Wrapper,
  MediaSection,
  ContentSection,
  Avatar,
  Title,
  Description,
} from "./styled";

export default function Card({ title, children, imageUrl, description }) {
  return (
    <Wrapper>
      <MediaSection>
        <Avatar>
          <img src={imageUrl} />
        </Avatar>
      </MediaSection>

      <ContentSection>
        <Title>{title}</Title>
        <Description>
          {description} {children}
        </Description>
      </ContentSection>
    </Wrapper>
  );
}

Card.propTypes = {
  title: PT.string,
  description: PT.string,
  imageUrl: PT.string,
};
