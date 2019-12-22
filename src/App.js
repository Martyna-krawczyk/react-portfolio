import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import './components/hero/Hero.css';

import Hero from './components/hero/Hero';
import Socials from './components/socials/Socials';
import Footer from './components/footer/Footer';

function Homepage() {
  return(
  <div>
    <h1>Homepage</h1>
    
    </div>
    )
}

function About() {
  return(<div>About</div>)
}

function Portfolio() {
  return (<div>Portfolio</div>)
}

function Contact() {
  return(<div>Contact</div>)
}

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Hero/>
    <Socials/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
