// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import layout components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Import pages
import HomePage from './pages/Homepage';
import PoetryPage from './pages/PoetryPage';
import AboutPage from './pages/AboutPage';
import CreativeJourneyPage from './pages/CreativeJourneyPage';
import AspirationsPage from './pages/AspirationsPage';

function App() {
  // Get the base URL from package.json's homepage field
  const baseUrl = process.env.PUBLIC_URL || '';
  
  // Initialize dark mode from local storage or system preference
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!('darkMode' in localStorage) && 
                  window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  return (
    <Router basename={baseUrl}>
      <div className="flex flex-col min-h-screen bg-light-200 dark:bg-dark-200 text-gray-900 dark:text-light-300 transition-colors duration-200">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/poetry" element={<PoetryPage />} />
            <Route path="/poetry/:id" element={<PoetryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journey" element={<CreativeJourneyPage />} />
            <Route path="/aspirations" element={<AspirationsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;