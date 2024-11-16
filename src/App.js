import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
// import Home from './Pages/Home';
import About from './Components/About/About'; // Assuming you have an About component
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Team from './Components/Team/Team';
import Process from './Components/Process/Process';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio-grid" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/our-process" element={<Process />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
