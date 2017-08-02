import styled from 'styled-components';

const Right = styled.div`
    float: right;
    margin-top: -8px;
    @media (max-width: 767px) {
      float: left;
      display: block;
      text-align: left;
      margin-left: 40px;
      margin-bottom: ${props => props.show ? '60px' : '0px'};
  	}
`;

export default Right;
