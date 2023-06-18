import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 15px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 5px;
  border: 1px solid black;
  background: linear-gradient(to bottom, #6e69e4, #1336ad);
  label {
    color: white;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  width: 96%;
  padding: 10px 5px;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: white;
  background: linear-gradient(to bottom, #65ad13, #647a4b);
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(to bottom, #e1d71b, #c7bc2a);
    border: none;
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
