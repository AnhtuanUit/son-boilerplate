import React from 'react';
import ALink from './ALink';
import AFacebook from './AFacebook';
import ATwitter from './ATwitter';
import Logo from './Logo';
import Menu from './Menu';
import Right from './Right';
import Img from './Img';
import ImgRight from './ImgRight';
import Homeyz_logo from './homeyz_logo.png';
import Twitter from './twitter.png';
import Facebook from './facebook.png';
import MenuIcon from './navbar.png';
import Dropdown from 'components/Dropdown';
import DropdownWrapper from './DropdownWrapper';
import Wrapper from './Wrapper';
import Hr from './Hr';

var $ = require("jquery");

const items = [
  "EN", "NL", "RF"
]

class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const isShow = !this.state.isShow;
    this.setState({isShow: isShow});
  }

  render() {
    return (
      <Wrapper>
        <Logo href="#home"><Img src={Homeyz_logo} alt="react-boilerplate - Logo" /></Logo>
        <Hr/>
        <Right className='menu-item' show={this.state.isShow}>
          <ALink href="#info" show={this.state.isShow}>MORE INFO</ALink>
          <ALink href="#faq" show={this.state.isShow}>FAQ</ALink>
          <ALink href="#tutorial" show={this.state.isShow}>TUTORIAL</ALink>
          <AFacebook href="https://twitter.com/Homeyz_app"><ImgRight src={Twitter} alt="react-boilerplate - Twitter" /></AFacebook>
          <ATwitter href="https://www.facebook.com/appHomeyz/?fref=ts"><ImgRight src={Facebook} alt="react-boilerplate - Facebook" /></ATwitter>
          <DropdownWrapper show={this.state.isShow}><Dropdown items={items}></Dropdown></DropdownWrapper>
        </Right>
        <Menu onClick={this.onClick} href="javascript:void(0);"><Img src={MenuIcon} alt="react-boilerplate - MenuIcon" /></Menu>
      </Wrapper>
    );
  }
}

export default Navbar;
