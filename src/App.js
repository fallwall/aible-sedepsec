import React, { Component } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
        <div id="about" className="page-about"><About /></div>
        <div id="work" className="page-content"><Menu /></div>
        <div id="contact" className="page-contact"><Contact /></div>
        <div className="page-footer"><Footer /></div>
      </>
    );
  }
}

export default App;
