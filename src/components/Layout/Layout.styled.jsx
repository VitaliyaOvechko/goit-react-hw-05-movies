import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  padding: 20px 150px;
  border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: black;
  border: 2px solid #287233;
  background-color: #b8fadd;
  &.active {
    background-color: #ffa8af;
  }
  &:hover {
    background-color: #cae8d3;
  }
`;

export const Footer = styled.div`
  margin-top: 20px;
  padding: 30px;
  border-top: 1px solid black;
  background-color: #b8fadd;
`;
