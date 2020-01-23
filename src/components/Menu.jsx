import React, { Component } from 'react';
import './Menu.css';
import Entries from '../data/poems.json';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      entries: null,
      slected: null,
      isSelected: false
    }
  }

  componentDidMount = () => {
    this.setState({
      entries: Entries.poems
    });
  }

  selectItem = (id) => {
    this.setState (prevState=>({
      selected: id,
      isSelected: !prevState.isSelected
    }))
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-left"></div>
        <div className="menu-right">
          {this.state.entries && this.state.entries.map(e =>
            <div key={e.id} className="menu-item">
              <div className="menu-item-title"
                onClick={()=>this.selectItem(e.id)}>
                {e.title}
              </div>
              {
                e.id === this.state.selected && this.state.isSelected &&
                <div className="menu-item-content">
                  {e.content}
                </div>
              }
            </div>)}
        </div>
      </div>
    )
  }
}
