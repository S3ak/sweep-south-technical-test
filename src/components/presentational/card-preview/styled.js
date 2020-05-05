import styled, { keyframes } from "styled-components";
import { palette } from "styled-tools";
import media from "styled-media-query";

const animeShiftBg = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
`;

export const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 7px 7px 12px -9px rgba(31, 31, 31, 1);
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: box-shadow 3s ease;

  &:hover {
    box-shadow: 11px 11px 12px -9px rgba(31, 31, 31, 1);

    img {
      transform: scale(1.2);
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  flex-direction: column;
`;

export const ColorSection = styled.div`
  flex: 1 0 70%;
  background: blue;
  background: linear-gradient(230deg, #a24bcf, #4b79cf, #4bc5cf);
  background-size: 200% 200%;
  animation: ${animeShiftBg} 3s ease infinite;
  border-radius: 10px 10px 120px 130px;
`;

export const BlankSection = styled.div`
  flex: 1 1 30%;
`;

export const Foreground = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderSection = styled.div`
  flex: 0 1 auto;
  width: 100%;
  min-height: 5rem;
`;

export const MediaSection = styled.div`
  width: 100%;
  flex: 1 1 auto;
  padding: 1.1rem 14% 0;
  min-width: 200px;

  ${media.greaterThan("medium")`
    padding: 1.1rem 9% 0;
  `}
`;

export const ContentSection = styled.div`
  width: 70%;
  flex: 2 1 auto;
  padding: 1rem 2rem;
`;

export const Avatar = styled.div`
  width: 100%;
  min-width: 200px;
  min-height: 200px;
  max-width: 600px;
  max-height: 600px;
  overflow: hidden;
  padding: 4%;
  margin: 0;
  background: white;

  img {
    margin: 0;
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    transition: transform 3s ease;
  }
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 1.7rem;
  padding: 4% 4% 0;
  text-align: center;
  color: ${palette("background.")};
`;

export const Description = styled.p`
  width: 100%;
  font-size: 1rem;
  color: ${palette("text")};
  text-align: center;
`;
