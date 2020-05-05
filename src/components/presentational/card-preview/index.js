import React from "react";

import {
  Wrapper,
  MediaSection,
  ContentSection,
  Avatar,
  Title,
  Description,
  Background,
  Foreground,
  ColorSection,
  BlankSection,
  HeaderSection,
} from "./styled";

export const Card = ({
  title = "Missing title",
  children,
  imageUrl = "https://randomuser.me/api/portraits/med/women/50.jpg",
  description = "Missing description",
}) => {
  return (
    // TODO: Use name instead, hide id
    <Wrapper>
      <Background>
        <ColorSection />
        <BlankSection />
      </Background>

      <Foreground>
        <HeaderSection>
          <Title>{title}</Title>
        </HeaderSection>

        <MediaSection>
          <Avatar>
            <img src={imageUrl} />
          </Avatar>
        </MediaSection>

        <ContentSection>
          <Description>
            {description} {children}
          </Description>
        </ContentSection>
      </Foreground>
    </Wrapper>
  );
};

export default Card;
