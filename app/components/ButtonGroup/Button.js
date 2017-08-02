import styled from 'styled-components';

const Button = styled.button`
  width: 150px;
  border: 1px solid #ccc;
  float: left;
  height: 44px;
`;

const BtnLeft = styled(Button)`
  background-color: rgb(28, 187, 165);
  color: white;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
`;

const BtnMid = styled(Button)`
  background-color: white;
  color: rgb(204, 204, 204)
`;

const BtnRight = styled(Button)`
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  background-color: white;
  color: rgb(204, 204, 204);
`;

export { BtnLeft, BtnMid, BtnRight };
