import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Navbar from '../Navbar';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './Banner';
import LogoH from './logo_H.png';
import GooglePlay from './google_play.png';
import AppStore from './app_store.png';
import messages from './messages';
import Slogan from './Slogan';
import Extra from './Extra';
import Download from './Download';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navbar/>
        <Banner>
          <Img src={LogoH} />
          <Slogan>Homeyz</Slogan>
          <Extra>Register already as homey or host and become a ‘Homeyz Original’ for life, with all the advantages that come with it.</Extra>
          <Download>
            <a target="blank" href="https://play.google.com/store/apps/details?id=com.homeyzapp2016" class="btn_download"><img src={GooglePlay} /></a>
            <a target="blank" href="https://itunes.apple.com/be/app/id1229692745" class="btn_download"><img src={AppStore}/></a>
          </Download>

        </Banner>
        {/* <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar> */}
      </div>
    );
  }
}

export default Header;
