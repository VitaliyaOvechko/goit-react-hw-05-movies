import { styled } from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
  gap: 5px;
`;

export const Input = styled.input`
  width: 400px;
  padding: 10px;
  border-color: #287233;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  padding: 9px 30px;
  border-radius: 4px;
  border: 2px solid #287233;
  font-size: 16px;
  font-weight: 700;
  background-color: #ffa8af;
  color: #287233;

  cursor: pointer;

  &:hover {
    background-color: #cae8d3;
  }
`;
