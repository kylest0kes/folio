import React from 'react';

import './WorkTab.css';

const WorkTab = (props) => {
  return (
    <li id={ props.tabnum}> { props.job } </li>
  )
}

export default WorkTab;