import styled from 'styled-components';

export default styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;

  background-color: ${({ isVisible }) => (isVisible ? 'lightblue' : ' #333')};
`;
