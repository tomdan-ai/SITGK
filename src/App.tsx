import React, { useEffect, useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DonatePage from './pages/DonatePage';
import WhatWeDo from './pages/WhatWeDo';
import ProjectsPage from './pages/ProjectsPage';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';

const useCurrentPage = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('navchange', handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('navchange', handleNavigation);
    };
  }, []);

  return currentPath;
};

const navigate = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new CustomEvent('navchange'));
};

(window as any).navigate = navigate;

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a');
  
  if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
    e.preventDefault();
    const path = anchor.getAttribute('href') || '/';
    navigate(path);
  }
});

function App() {
  const currentPath = useCurrentPage();
  
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'SITGK International - Stand In The Gap Kindred International',
      '/about': 'About Us - SITGK International',
      '/what-we-do': 'What We Do - SITGK International',
      '/projects': 'Our Projects - SITGK International',
      '/donate': 'Ways to Give - SITGK International',
      '/get-involved': 'Get Involved - SITGK International',
      '/contact': 'Contact Us - SITGK International',
    };
    
    document.title = pageTitles[currentPath] || 'SITGK International';
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/donate':
        return <DonatePage />;
      case '/what-we-do':
        return <WhatWeDo />;
      case '/projects':
        return <ProjectsPage />;
      case '/get-involved':
        return <GetInvolved />;
      case '/contact':
        return <Contact />;
      default:
        setTimeout(() => navigate('/'), 0);
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;