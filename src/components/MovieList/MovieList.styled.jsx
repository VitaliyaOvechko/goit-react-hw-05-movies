import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  background-color: #ffe3e4;
  padding: 15px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover,
  &:focus {
    background-color: #dafeef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const MovieName = styled.h2`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 200px;
  color: black;
`;
