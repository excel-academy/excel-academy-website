import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import buttonCSS, { primaryButton, largeButton, smallButton } from '../button/button-css';

export default styled(Link)`
  ${buttonCSS}

  ${props => props.primary && css`
    ${primaryButton}
  `}

  ${props => props.small && css`
    ${smallButton}
  `}

  ${props => props.large && css`
    ${largeButton}
  `}
`;
