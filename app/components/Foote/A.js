import styled from 'styled-components';
import NormalA from 'components/A';

const A = styled(NormalA)`
    float: left;
    display: block;
    margin-top: 10px;
    margin-left: 7px;
    @media (max-width: 767px) {
      text-align: center;
      float: none;
      margin-top: 19px;
  	}
`;

export default A;
