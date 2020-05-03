import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: columns;
  align-items: space-around;
  background: white;
`;

export const MediaSection = styled.div`
  width: 30%;
  flex: 1 1 auto;
  padding: 2rem;
`;

export const ContentSection = styled.div`
  width: 70%;
  flex: 2 1 auto;
  padding: 2rem;
`;

export const Avatar = styled.div`
  width: 100%;
  min-width: 50px;
  min-height: 50px;
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
  padding: 0;
  margin: 0;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 3rem;
`;

export const Description = styled.div`
  width: 100%;
  font-size: 1rem;
`;
