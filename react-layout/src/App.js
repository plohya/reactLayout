import './index.css';
import React from "react";
import TopHeader from './components/TopHeader';
import BottomHeader from './components/BottomHeader';
import QS from './components/QS'
import FC from './components/FC'
import PS from './components/PS'
import Footer from './components/Footer'
import SimpleSlider from './components/Slider';

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
    console.log('ThemeMustChange');
    console.log('theme: ', this.state.theme);
  }

render() {
  this.setTheme();
  return (
    <div>
      <div className='header'>
        <TopHeader theme={this.state.theme} updateData={this.updateData}/>
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
}

export default App;