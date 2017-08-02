import styled from 'styled-components';
import NormalA from 'components/A';

const A = styled(NormalA)`
    float: left;
    display: inline-block;
    font-weight: 400;
    line-height: 4.38;
    text-decoration: none;
    font-family: BubbleboddyNeueRegular;
    padding: 15px;
    @media (max-width: 767px) {
  		${'' /* display: none; */}
      float: none;
      display: block;
      text-align: left;
  	}
`;

export default A;
