import React from 'react';

import './scss/App.scss';
import './scss/Header.scss';
import './scss/Footer.scss';
import './scss/MobileNav.scss';
import './scss/Main.scss';

import logo from './kennely-logo.svg';

import Header from './components/Header';
import MobileNav from './components/MobileNav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
        <div className="container">
          <Header logo={logo} />
          <MobileNav />
          <Main />
          <Footer logo={logo} />
        </div>
  );
}

export default App;
