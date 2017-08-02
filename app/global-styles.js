import { injectGlobal } from 'styled-components';
import BubbleboddyNeueExtraBold from './font/0_BubbleboddyNeue-ExtraBold.ttf';
import BubbleboddyNeueLight from './font/0_BubbleboddyNeue-Light.ttf';
import BubbleboddyNeueRegular from './font/0_BubbleboddyNeue-Regular.ttf';
import BubbleboddyNeueThin from './font/0_BubbleboddyNeue-Thin.ttf';
import BubbleboddyNeueInlineExtBd from './font/0_BubbleboddyNeueInline-ExtBd.ttf';
import BubbleboddyExtraLightTrial from './font/Bubbleboddy-ExtraLightTrial.ttf';
import BubbleboddyNeueTrial from './font/BubbleboddyNeue-trial.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  @font-face {
    font-family: BubbleboddyNeueExtraBold;
    src: url('${BubbleboddyNeueExtraBold}') format('opentype');
  }
  @font-face {
    font-family: BubbleboddyNeueLight;
    src: url('${BubbleboddyNeueLight}') format('opentype');
  }
  @font-face {
    font-family: BubbleboddyNeueRegular;
    src: url('${BubbleboddyNeueRegular}') format('opentype');
  }
  @font-face {
    font-family: BubbleboddyNeueThin;
    src: url('${BubbleboddyNeueThin}') format('opentype');
  }
  @font-face {
    font-family: BubbleboddyNeueInlineExtBd;
    src: url('${BubbleboddyNeueInlineExtBd}') format('opentype');
  }
  @font-face {
    font-family: BubbleboddyExtraLightTrial;
    src: url('${BubbleboddyExtraLightTrial}') format('opentype');
  }
  @font-face {
    font-family: BubbleboddyNeueTrial;
    src: url('${BubbleboddyNeueTrial}') format('opentype');
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
