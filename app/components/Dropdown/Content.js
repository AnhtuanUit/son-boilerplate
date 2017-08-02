/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';

const Content = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 8px rgba(0,0,0,0.2);
  z-index: 1;
  right: 11px;

  @media (max-width: 767px) {
    display: block;
    position: inherit;
    box-shadow: none;
    font-family: BubbleboddyNeueRegular;
  }
`;

export default Content;
