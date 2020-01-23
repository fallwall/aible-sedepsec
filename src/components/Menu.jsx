import React from 'react';
import './Menu.css';
import Entries from '../data/poems.json';

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-left"></div>
      <div className="menu-right">{Entries.poems.map(e => <div key={e.id}>{e.title}</div>)}</div>
    </div>
  )
}
