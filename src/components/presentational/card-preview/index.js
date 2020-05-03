import React from "react";

import {
  Wrapper,
  MediaSection,
  ContentSection,
  Avatar,
  Title,
  Description,
} from "./styled";

export const Card = ({
  title = "Missing title",
  children,
  imageUrl = "https://randomuser.me/api/portraits/med/women/50.jpg",
  description = "Missing description",
}) => {
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
};

export default Card;