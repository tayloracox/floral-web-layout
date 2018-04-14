import React, { Component } from 'react';
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import '../App.css';
import Portfolio from "../Portfolio";

class App extends Component {
  state = {
    portfolio: {}
  };

  loadPortfolio = () => {
    this.setState({ portfolio: Portfolio });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
