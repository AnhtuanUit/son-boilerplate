import styled from 'styled-components';
import A from './A.js';

const Logo = styled(A)`
    padding: initial;

    @media (max-width: 767px) {
      display: block;
      float: none;
      text-align: left;
      font-size: 1em;
  	}
`;

export default Logo;
