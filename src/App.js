import React, { Component } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  changeView = () => {

  }
  render() {
    return (
      <>
        <Nav
          name="Elbia"
          title1="About"
          title2="Works"
          title3="Contact"
          title4="Social"
          onClick={this.changeView}
        />
        <div className="page-hero"><Hero /></div>
        <div className="page-content"></div>
        <div className="page-footer"></div>
      </>
    );
  }
}

export default App;
