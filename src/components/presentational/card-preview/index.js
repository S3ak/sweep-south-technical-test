import React from "react";
import Link from "next/link";

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
  uuid,
}) => {
  return (
    // TODO: Use name instead, hide id
    <Link href={`/profiles/${uuid}`}>
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
    </Link>
  );
};

export default Card;
