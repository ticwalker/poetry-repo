// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Mail } from 'lucide-react';
import { biographyData } from '../../data/biography';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-dark-300">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding section */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-xl md:text-2xl font-semibold inline-block mb-4">
              <span className="gradient-text from-accent-indigo to-accent-purple dark:from-accent-purple dark:to-accent-pink">
                {biographyData.name}
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              {biographyData.tagline} — a collection of emotions, memories, and reflections expressed through poetry.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/yashiit.14/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white dark:bg-dark-200 text-accent-indigo dark:text-accent-purple hover:bg-accent-indigo/10 dark:hover:bg-accent-purple/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:yashiitripathi14@gmail.com" 
                className="p-2 rounded-full bg-white dark:bg-dark-200 text-accent-indigo dark:text-accent-purple hover:bg-accent-indigo/10 dark:hover:bg-accent-purple/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation sections */}
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/poetry" 
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-indigo dark:hover:text-accent-purple transition-colors"
                >
                  All Poems
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-indigo dark:hover:text-accent-purple transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  to="/journey" 
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-indigo dark:hover:text-accent-purple transition-colors"
                >
                  My Journey
                </Link>
              </li>
              <li>
                <Link 
                  to="/aspirations" 
                  className="text-gray-600 dark:text-gray-400 hover:text-accent-indigo dark:hover:text-accent-purple transition-colors"
                >
                  Future Dreams
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-lg mb-4">Favorites</h3>
            <ul className="space-y-2">
              {biographyData.favorites && biographyData.favorites.colors && biographyData.favorites.colors.map((color, index) => (
                <li key={`color-${index}`} className="text-gray-600 dark:text-gray-400">
                  {color}
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/poetry/3" 
                  className="text-accent-indigo dark:text-accent-purple hover:underline transition-colors"
                >
                  Featured Poem →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="border-t border-gray-200 dark:border-dark-200">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {biographyData.name}. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-accent-pink" />
            <span>by someone who cares</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;