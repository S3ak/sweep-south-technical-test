import styled, { keyframes } from "styled-components";

const animeRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${animeRotate} 2s linear infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;
