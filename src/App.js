import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { trackPageView } from './utils/analytics';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project1 from './components/ProjectPages/Project1';
import Project2 from './components/ProjectPages/Project2';
import Qrkiez from './components/ProjectPages/Qrkiez';
import Portal from './components/ProjectPages/Portal';
import Unicef from './components/ProjectPages/Unicef';
import Lloyd from './components/ProjectPages/Lloyd';
import Myriad from './components/ProjectPages/Myriad';
import Amdocs from './components/ProjectPages/Amdocs';
import Cleaner from './components/ProjectPages/Cleaner';
import PhotoDoodles from './components/ProjectPages/PhotoDoodles';
import GraphicThoughts from './components/ProjectPages/GraphicThoughts';
import Drawings from './components/ProjectPages/Drawings';
import './styles/App.css';
import './styles/common-project.css';

function AppContent() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');

  useEffect(() => {
    if (isProjectPage) {
      document.body.classList.add('project-page-body');
    } else {
      document.body.classList.remove('project-page-body');
    }
  }, [isProjectPage]);

  // Track page views
  useEffect(() => {
    const getPageTitle = (pathname) => {
      if (pathname === '/') return 'Home';
      if (pathname === '/about') return 'About';
      if (pathname === '/contact') return 'Contact';
      if (pathname.startsWith('/project/')) {
        const projectName = pathname.split('/').pop();
        return `Project - ${projectName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
      }
      return 'Portfolio';
    };

    const pageTitle = getPageTitle(location.pathname);
    trackPageView(location.pathname, pageTitle);
  }, [location]);

  return (
    <div className={`App ${isProjectPage ? 'project-page' : ''}`}>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/1" element={<Project1 />} />
          <Route path="/project/2" element={<Project2 />} />
          <Route path="/project/qrkiez" element={<Qrkiez />} />
          <Route path="/project/portal" element={<Portal />} />
          <Route path="/project/unicef" element={<Unicef />} />
          <Route path="/project/lloyd" element={<Lloyd />} />
          <Route path="/project/myriad" element={<Myriad />} />
          <Route path="/project/amdocs" element={<Amdocs />} />
          <Route path="/project/cleaner" element={<Cleaner />} />
          <Route path="/project/photo-doodles" element={<PhotoDoodles />} />
          <Route path="/project/graphic-thoughts" element={<GraphicThoughts />} />
          <Route path="/project/drawings" element={<Drawings />} />
          {/* Add more project routes as needed */}
          <Route path="/project/:id" element={<Project1 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

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
      <AppContent />
    </Router>
  );
}

export default App;
