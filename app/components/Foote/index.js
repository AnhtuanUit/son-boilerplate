import React from 'react';
import Link from './Link';
import A from './A';
import Wrapper from './Wrapper';
import FooterIcon from './footer_icon.png';
import Separate from './Separate';
import Right from './Right';
import Img from './Img';

function Footer() {
  return (
    <Wrapper>
      <A><Img src={FooterIcon} /></A>
      <Right>
      <Link href="#info">More Info</Link>
      <Separate>|</Separate>
      <Link href="/js/aq/{{TOS}}.pdf" target="blank">Terms & Conditions</Link>
      <Separate>|</Separate>
      <Link target="blank" href="#home">Privacy policy</Link>
      <Separate>|</Separate>
      <Link target="blank" href="#home">Mango Pay</Link>
    </Right>
    </Wrapper>
  );
}

export default Footer;
