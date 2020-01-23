import React, { Component } from 'react';
import './Menu.css';
import Entries from '../data/poems.json';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      entries: null
    }
  }

  componentDidMount = () => {
    this.setState({
      entries: Entries.poems
    });
  }




  render() {
    return (
      <div className="menu-container">
        <div className="menu-left"></div>
        <div className="menu-right">
          {this.state.entries && this.state.entries.map(e => <div key={e.id}>{e.title}</div>)}
        </div>
      </div>
    )
  }
}
