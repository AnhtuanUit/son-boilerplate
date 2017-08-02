import styled from 'styled-components';
import A from './A.js';

const Menu = styled(A)`
    display: none;

    @media (max-width: 767px) {
      display: block;
      position: absolute;
      right: 0;
      top: -3px;
    }
`;

export default Menu;
