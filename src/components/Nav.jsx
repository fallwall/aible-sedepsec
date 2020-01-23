import React from 'react';
import './Nav.css';

const Nav = (props) => {
  return (
    <div className="nav">
      <a href="#about"><div className="nav-item">{props.title1}</div></a>
      <a href="#work"><div className="nav-item">{props.title2}</div></a>
      <div className="nav-name">{props.name}</div>
      <a href="#contact"><div className="nav-item">{props.title3}</div></a>
      <a href="#contact"><div className="nav-item">{props.title4}</div></a>
    </div>
  )
}

export default Nav;