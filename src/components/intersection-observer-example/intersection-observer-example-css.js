import styled from 'styled-components';

export default styled.div`
  position: relative;
  padding: 4rem;
  margin: 4rem;
  background-color: ${({ isVisible }) => (isVisible ? 'lightblue' : ' #333')};
  border-radius: 10px;
  color: #fff;
  text-align: center;
  transition: background-color 0.3s ease;
`;
