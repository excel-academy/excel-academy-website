import styled from 'styled-components';
import { Box } from 'rebass';
import media from '../../media';

export default styled(Box)`
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 11;
  display: none;

  ${media.tablet`
    display: block;
  `}
`;
