// src/components/layout/Navigation.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Palette, User, Star, Menu, X } from 'lucide-react';
import { biographyData } from '../../data/biography';
import DarkModeToggle from '../shared/DarkModeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/poetry", icon: <BookOpen size={18} />, label: "Poetry" },
    { to: "/journey", icon: <Palette size={18} />, label: "Journey" },
    { to: "/about", icon: <User size={18} />, label: "About" },
    { to: "/aspirations", icon: <Star size={18} />, label: "Dreams" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 
      ${scrolled 
        ? 'bg-white/80 dark:bg-dark-200/80 backdrop-blur-lg shadow-sm py-3' 
        : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-display text-xl md:text-2xl font-semibold"
        >
          <span className="gradient-text from-accent-indigo to-accent-purple dark:from-accent-purple dark:to-accent-pink">
            {biographyData.name}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`flex items-center gap-1.5 transition-all duration-200 px-2 py-1 relative
                ${location.pathname === link.to 
                  ? 'text-accent-indigo dark:text-accent-purple font-medium' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-accent-indigo dark:hover:text-accent-purple'}`}
              >
                {link.icon}
                <span>{link.label}</span>
                {location.pathname === link.to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-indigo dark:bg-accent-purple rounded-full transform scale-x-100 origin-left transition-transform"></span>
                )}
              </Link>
            ))}
          </div>
          
          {/* Dark mode toggle */}
          <DarkModeToggle />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-accent-indigo dark:hover:text-accent-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile navigation panel */}
      <div className={`fixed top-[72px] right-0 bottom-0 w-64 bg-white dark:bg-dark-200 shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`flex items-center gap-2 px-4 py-4 transition-colors rounded-lg
              ${location.pathname === link.to 
                ? 'bg-accent-indigo/10 dark:bg-accent-purple/20 text-accent-indigo dark:text-accent-purple font-medium' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;