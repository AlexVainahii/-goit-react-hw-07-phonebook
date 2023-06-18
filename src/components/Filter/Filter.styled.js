import styled from '@emotion/styled';

export const CardContainer = styled.div`
  padding: 15px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  background: linear-gradient(to bottom, #6e69e4, #1336ad);
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;
  }
`;

export const CardLabel = styled.label`
  font-size: 16px;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 14px;
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
