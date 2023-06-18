import styled from '@emotion/styled';

export const SectionContainer = styled.div`
  padding: 15px;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid black;
  background: linear-gradient(
    to bottom,
    rgba(225, 215, 27, 0.5),
    rgba(199, 188, 42, 0.5)
  );
  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    padding: 10px;
  }
`;
export const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  padding: 15px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: none;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
