import styled from '@emotion/styled';

export const Ul = styled.ul`
  padding: 15px;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  background: linear-gradient(to bottom, #6e69e4, #1336ad);
  border-radius: 5px;
  max-height: 390px;
  overflow: auto;
  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;
  }
`;

export const P = styled.p`
  background: linear-gradient(to bottom, #6e69e4, #1336ad);
  border-radius: 5px;
  text-align: center;
  display: block;
  font-size: 18px;
  text-wrap: wrap;
  padding: 10px;
  color: #fff;

  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 300px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;

    font-size: 16px;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  gap: 10px;
  background-color: #fff;
  transition: background-color 0.3s ease;
  :hover {
    background-color: yellow;
  }
`;

export const Button = styled.button`
  width: 10%;
  border-radius: 50%;
  border: none;
  background: linear-gradient(to bottom, #E04236, #AD4E18);
  font-size: 16px;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition:  scale 0.3s ease;

  :hover {
 scale:1.1;
    
  }
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;
