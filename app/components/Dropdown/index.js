import React from 'react';

import A from './A';
import Wrapper from './Wrapper';
import Content from './Content';
import Item from './Item';

function Dropdown(props) {
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <Item key={`item-${index}`}>{item}</Item>
    ));
  } else {
    // Otherwise render a single component
    content = (<Item />);
  }

  return (
    <div>
      <Wrapper>
        <A>EN</A>
        <Content className="dropdown-content">
          {content}
        </Content>
      </Wrapper>
    </div>
  );
}

Dropdown.propTypes = {
  items: React.PropTypes.any,
};

export default Dropdown;
