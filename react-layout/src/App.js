import './index.css';
import TopHeader from './components/TopHeader';
import BottomHeader from './components/BottomHeader';
import QS from './components/QS'
import FC from './components/FC'
import PS from './components/PS'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div className='header'>
        <TopHeader />
        <BottomHeader />
      </div>
      
      <div className = 'main'>
        <QS />
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
