import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project1 from './components/ProjectPages/Project1';
import Project2 from './components/ProjectPages/Project2';
import Qrkiez from './components/ProjectPages/Qrkiez';
import Meirad from './components/ProjectPages/Meirad';
import Unicef from './components/ProjectPages/Unicef';
import Lloyd from './components/ProjectPages/Lloyd';
import Myriad from './components/ProjectPages/Myriad';
import Amdocs from './components/ProjectPages/Amdocs';
import Cleaner from './components/ProjectPages/Cleaner';
import './styles/App.css';
import './styles/common-project.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/1" element={<Project1 />} />
            <Route path="/project/2" element={<Project2 />} />
            <Route path="/project/qrkiez" element={<Qrkiez />} />
            <Route path="/project/portal" element={<Meirad />} />
            <Route path="/project/unicef" element={<Unicef />} />
            <Route path="/project/lloyd" element={<Lloyd />} />
            <Route path="/project/myriad" element={<Myriad />} />
            <Route path="/project/amdocs" element={<Amdocs />} />
            <Route path="/project/cleaner" element={<Cleaner />} />
            {/* Add more project routes as needed */}
            <Route path="/project/:id" element={<Project1 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
