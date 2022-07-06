import Navbar from './app/components/navbar/Navbar';
import Home from './app/components/home/Home';
import ProjectsStripe from './app/components/projectsStripe/ProjectsStripe';
import About from './app/components/about/About';
import Contact from './app/components/contact/Contact';
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
    <Navbar/>
    <Home/>
    <ProjectsStripe/>
    <About />
    <Contact/>
    </div>
  );
}

export default App;
