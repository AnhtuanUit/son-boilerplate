import React from 'react';

import Wrapper from './Wrapper';
import Content from './Content';
import Item from './Item';
import PreBtnIcon from './pre_btn.png';
import NextBtnIcon from './next_btn.png';
import { PreBtn, NextBtn } from './Control';

function List(props) {
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <Item key={`item-${index}`} target="blank" href="/article/3">
          <div><img style={{ maxHeight: '200px', maxWidth: '272px' }} src={`${item}`} title="Le Triomphe Des Influenceurs"/></div>
      </Item>
    ));
  } else {
    // Otherwise render a single component
    content = (<Item />);
  }

  return (
    <Wrapper>
    <div style={{ overflow: "hidden",  width: '962px'}}>
        <Content>
          {content}
        </Content>
    </div>
      <PreBtn src={PreBtnIcon}/>
      <NextBtn src={NextBtnIcon}/>
    </Wrapper>

  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;
