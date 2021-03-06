import './index.css';
import React from "react";
import { useState } from 'react';
import TopHeader from './components/TopHeader';
import BottomHeader from './components/BottomHeader';
import QualifiedSupport from './components/QualifiedSupport'
import ForCards from './components/ForCards'
import PammService from './components/PammService'
import Footer from './components/Footer'

function App() {

  const [theme, setTheme] = useState(localStorage.theme);

  function setStorageTheme() {
    if (localStorage.theme === undefined) {
      document.documentElement.setAttribute('theme', 'light');
      setTheme('light');
    }
    if (localStorage.theme === 'dark') {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'light');
    } else if (localStorage.theme === 'light'){
      document.documentElement.setAttribute('theme', 'light');
      localStorage.setItem('theme', 'dark');
    }
    localStorage.setItem('theme', theme);
  }

  function updateData(value) {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  setStorageTheme();
  return (
    <div>
      <div className='header'>
        <TopHeader theme={theme} updateData={() => updateData()} />
        <BottomHeader />
      </div>

      <div className = 'main'>
        <QualifiedSupport />
        <ForCards />
        <PammService />
      </div>
      
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;