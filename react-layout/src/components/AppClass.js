import './index.css';
import React from "react";
import TopHeader from './components/TopHeader';
import BottomHeader from './components/BottomHeader';
import QualifiedSupport from './components/QualifiedSupport'
import ForCards from './components/ForCards'
import PammService from './components/PammService'
import Footer from './components/Footer'

class App extends React.Component {

  state = {
    theme: localStorage.theme,
  };
  
  setTheme() {
    if (localStorage.theme === undefined) {
      document.documentElement.setAttribute('theme', 'light');
      this.setState({theme: 'light'});
    }

    if (localStorage.theme === 'dark') {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'light');
    } else if (localStorage.theme === 'light'){
      document.documentElement.setAttribute('theme', 'light');
      localStorage.setItem('theme', 'dark');
    }
  localStorage.setItem('theme', this.state.theme);
  }

  updateData = (value) => {
    this.state.theme === 'light' ? this.setState({theme: 'dark'}) : this.setState({theme: 'light'});
  }

render() {
  this.setTheme();
  return (
    <div>
      <div className='header'>
        <TopHeader theme={this.state.theme} updateData={this.updateData} />
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
}

export default App;