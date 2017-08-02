import styled from 'styled-components';

const Dropdown = styled.div`
    float: left;
    display: block;
    @media (max-width: 767px) {
      display: ${props => props.show ? 'block' : 'none'};
      float: none;
      text-align: left;
    }
`;

export default Dropdown;
