import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const NoInfoTitle = styled.h1``;

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BackBtn = styled(Link)`
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-flex;
  width: 100px;
  padding: 9px 30px;
  border-radius: 4px;
  border: 2px solid #287233;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  background-color: #ffa8af;
  color: #287233;

  cursor: pointer;

  &:hover {
    background-color: #cae8d3;
  }
`;

export const MovieDetailWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 39px -10px rgba(0, 0, 0, 0.75);
`;

export const Info = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoItem = styled.li``;

export const MovieName = styled.h1``;
export const InfoItemTitle = styled.h2``;

export const ListGenres = styled.ul`
  display: flex;
  gap: 5px;
  padding: 0px;
`;

export const ItemGenres = styled.li`
  background-color: #287233;
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 15px;
`;

export const Additional = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 50px;
`;

export const AddTitle = styled.h2``;

export const AddList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const AdditionalItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  border-radius: 5px;
  border: 2px solid #287233;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 700;
  background-color: #ffa8af;
  border-radius: 5px;
  &:hover {
    background-color: #cae8d3;
  }
`;

export const AddLink = styled(Link)`
  text-decoration: none;
  color: #287233;
`;
