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
import ItConsulting from './Components/IT-Consulting/ItConsulting';
import PermanentITStaffing from './Components/Pemanent-IT-Staffing/PermanentITStaffing';
import TemporaryITStaffing from './Components/Temporary-IT-staffing/TemporaryITStaffing';
import StaffAugmentation from './Components/Staff-Augmentation/StaffAugmentation';

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
        <Route path="/IT-consulting" element={<ItConsulting />} />
        <Route path="/Permanent-staffing" element={<PermanentITStaffing />} />
        <Route path="/Temporary-staffing" element={<TemporaryITStaffing />} />
        <Route path="/Staff-augmentation" element={<StaffAugmentation />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;












