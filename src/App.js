import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Tourch from './components/Tourch';

function App() {
  return (
    <div className='container'>
      <DarkModeToggle/>
      <Tourch/>
      <Footer/>
    </div>
  );
}

export default App;
