import React from 'react';

import './scss/App.scss';
import logo from './kennely-logo.svg';

import data from './data/pets.json';

import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Main from './components/Main';
import Footer from './components/Footer';
// import Banner from './components/Banner';

function App() {
  return (
        <div className="container">
          <Header logo={logo} />
          <MobileNav />
          <Main data={data} />
          <Footer logo={logo} />
        </div>
  );
}

export default App;
