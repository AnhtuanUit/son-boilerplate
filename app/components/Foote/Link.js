import { Link } from 'react-router';
import styled from 'styled-components';
import A from 'components/A';
export default styled(A)`
  float: left;
  text-decoration: none;
  color: #666;
  font-family: BubbleboddyNeueRegular;

  @media (max-width: 767px) {
    float: none;
    display: block;
    font-size: 1.3em;
  }
`;
