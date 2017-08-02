import styled from 'styled-components';
import NormalA from 'components/A';

const Item = styled(NormalA)`
    display: block;
    text-decoration: none;
    color: black;
    padding: 12px 30px;
    font-size: 1.2em;

    @media (max-width: 767px) {
      display: inline;
      padding: 12px 26px;
      color: #8a8a8a;
    }
`;

export default Item;
