import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';


import Hero from './components/hero/Hero';
import Socials from './components/socials/Socials';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';


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
        <Route exact path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/portfolio"><Portfolio/></Route>
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
