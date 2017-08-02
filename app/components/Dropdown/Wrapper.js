import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: block;

  &:hover .dropdown-content {
    display: block;
  }
`;

export default Wrapper;
