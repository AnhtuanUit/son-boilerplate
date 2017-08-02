import styled from 'styled-components';
import Banner from './banner.png';

export default styled.div`
  position: relative;
  float: left;
  clear: both;
  width: 100%;
  height: 700px;
  background-image: url('${Banner}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  margin-top: 71px;
`;
