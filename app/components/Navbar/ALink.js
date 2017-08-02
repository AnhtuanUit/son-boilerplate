import styled from 'styled-components';
import A from './A.js';

const ALink = styled(A)`
    @media (max-width: 767px) {
      display: ${props => props.show ? 'block' : 'none'};
      font-size: 1.1em;
      float: none;
      text-align: left;
    }
`;

export default ALink;
