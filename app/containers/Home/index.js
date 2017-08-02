/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Fram1 from './frame_1.png';
import Fram2 from './frame_2.png';
import PoweredByMangopay from './powered-by-mangopay.png';
import H1 from 'components/H1';
import Title from './Title';
import Center from './Center';
import Line from './Line';
import ButtonGroup from 'components/ButtonGroup';
import Slide from 'components/Slide';
import Press1 from './press_01.png';
import Press2 from './press_02.png';
import Press3 from './press_03.png';
import Press4 from './press_04.png';
import Press5 from './press_05.png';
import Press6 from './press_06.png';
import Press7 from './press_07.png';
import Press8 from './press_08.png';
import Press9 from './press_09.png';
import Press10 from './press_10.svg';


import { Wrapper, ImgLeft, ImgRight, TextLeft, TextRight, Span, PLeft, PRight } from './HowItWork';

console.log(Press1);

const list = [
  Press1,
  Press2,
  Press3,
  Press4,
  Press5,
  Press6,
  Press7,
  Press8,
  Press9,
  Press10,
]


export default class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Feature Page"
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}
        />
        <Title>
          How does Homeyz work?
        </Title>
        <Center>
          <Wrapper>
            <ImgLeft src={Fram1} />
            <TextLeft>
              <Span>A homey</Span> offers help in home, in the garden and with all sorts of chores.
            </TextLeft>
            <PLeft>Set course to Pukkelpop by doing the laundry or iron yourself en route to some sun, sand and sea. Being a Homey, you can earn up to €5.000 by helping a Host out.</PLeft>
          </Wrapper>
          <Wrapper>
            <ImgRight src={Fram2} />
            <TextRight>
              <Span>A Host</Span> could use some help at home from time to time.
            </TextRight>
            <PRight>Your pile of dirty laundry just keeps growing, your garden looks like the Amazon rainforest and your home could do without that layer of dust? Then you should become a host, hire a homey and get all the help you need.</PRight>
          </Wrapper>
        </Center>
        <Line/>
        <h2 class="press-title" style={{ fontFamily: 'BubbleboddyNeueRegular', textAlign: 'center', color: '#ccc' }}>What you can do with Homeyz</h2>
        <ButtonGroup></ButtonGroup>
        <Line/>
        <h1 class="press-title" style={{ fontFamily: 'BubbleboddyNeueRegular', textAlign: 'center', color: '#ccc' }}>What people say about Homeyz</h1>
          <Slide items={list} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img style={{ width: '30%' }} src={PoweredByMangopay} />
        </div>
      </div>
    );
  }
}
