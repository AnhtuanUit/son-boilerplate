import styled from 'styled-components';
import A from './A.js';

const AFacebook = styled(A)`
    @media (max-width: 767px) {
        display: block;
        position: absolute;
        right: 86px;
        top: 0;
    }
`;

export default AFacebook;
