import styled from 'styled-components';
import Fram1 from './frame_1.png';
import Fram2 from './frame_2.png';

const Wrapper = styled.div`
  width: 525px;
  height: 330px;
  position:relative;
  display: inline-block;
  margin-top: 60px;
  text-align: left;
`;

const ImgLeft = styled.img`
  position:absolute;
  left:0;
  top:0;
`;

const ImgRight = styled.img`
  position:absolute;
  right:0;
  top:0;
`;

const Text = styled.p`
  font-family: BubbleboddyNeueLight;
  line-height: 1.2em;
  font-size: 1.9em;
  z-index:100;
  position:absolute;
  font-weight:bold;
  width: 73%;
  top: -10px;
`;

const TextLeft = styled(Text)`
  left: 68px;
  color: #c88381;
`;

const TextRight = styled(Text)`
  width: 65%;
  right: 68px;
  color: #587ab8;
`;

const Span = styled.span `
  font-family:BubbleboddyNeueRegular
`;

const PLeft = styled(Text) `
  width: 75%;
  color: rgb(140, 140, 140);
  left: 44px;
  font-size: 20px;
  top: 150px;
`;

const PRight= styled(Text) `
    width: 80%;
    color: rgb(140, 140, 140);
    font-size: 20px;
    top: 150px;
    right: 8px;
`;

export { Wrapper, ImgLeft, ImgRight, TextLeft, TextRight, Span, PLeft, PRight };
