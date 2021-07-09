import './index.css';
import { useState } from 'react';
import TopHeader from './components/TopHeader';
import BottomHeader from './components/BottomHeader';
import QS from './components/QS'
import FC from './components/FC'
import PS from './components/PS'
import Footer from './components/Footer'
import SimpleSlider from './components/Slider';
import './index.css';

function App() {

  return (
    <div>

      <div className='header'>
        <TopHeader />
        <BottomHeader />
      </div>
      
      <div className = 'main'>
      <div className="qualified-support-container_wrapper">
       <div className='main_qualified-support_container'>
        <div className='area'>
            <QS />
            <SimpleSlider />
          </div>
        </div>
      </div>
        <FC />
        <PS />
      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
