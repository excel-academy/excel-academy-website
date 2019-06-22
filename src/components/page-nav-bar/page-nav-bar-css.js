import styled from 'styled-components';
import { Box } from 'rebass';
import media from '../../media';

export default styled(Box)`
  position: sticky;
  z-index: 11;
  top: 0;
  bottom: 0;
  display: none;

  ${media.tablet`
    display: block;
  `}
`;
