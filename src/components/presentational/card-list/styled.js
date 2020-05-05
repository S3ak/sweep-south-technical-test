import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 100%;
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
`;

export const CardListItem = styled.li`
  display: block;
  width: 100%;
  padding: 5%;
`;

export default {
  Wrapper,
  CardListItem,
};
