import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items center;
  height: 100vh;
`;

export const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

export const Board = styled.div`
  min-height: 200px;
  padding: 30px 20px 20px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
`;

export const Card = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
`;
