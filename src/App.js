import Greeting from './app/components/greeting/Greeting'
import Navbar from './app/components/navbar/Navbar';
import Home from './app/components/home/Home';
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
    <Navbar/>
    {/* <Greeting/> */}
    <Home/>
    </div>
  );
}

export default App;
