import React from 'react';
import './Nav.css';

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav-item">{props.title1}</div>
      <div className="nav-item">{props.title2}</div>
      <div className="nav-name">{props.name}</div>
      <div className="nav-item">{props.title3}</div>
      <div className="nav-item">{props.title4}</div>
    </div>
  )
}

export default Nav;