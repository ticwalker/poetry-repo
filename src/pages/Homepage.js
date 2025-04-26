// src/pages/HomePage.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import { poems } from '../data/poems';
import { biographyData } from '../data/biography';

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [featuredPoemIndex, setFeaturedPoemIndex] = useState(0);
  const heroRef = useRef(null);
  
  // Get featured poems
  const featuredPoems = poems.filter(poem => poem.featured);
  
  // Type writer effect
  const quoteText = "Poetry is the art of painting pictures with words and emotions.";
  
  useEffect(() => {
    if (typedText.length < quoteText.length) {
      const timeout = setTimeout(() => {
        setTypedText(quoteText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  // Animation for hero section
  useEffect(() => {
    setIsHeroVisible(true);
    
    // Change featured poem every 10 seconds
    const interval = setInterval(() => {
      setFeaturedPoemIndex(prev => (prev + 1) % featuredPoems.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [featuredPoems.length]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`min-h-screen pt-24 px-4 relative overflow-hidden transition-opacity duration-1000 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-accent-indigo/10 dark:bg-accent-indigo/20 blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-purple/10 dark:bg-accent-purple/20 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-pink/10 dark:bg-accent-pink/20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-in" style={{animationDelay: '0.2s'}}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="gradient-text from-accent-indigo to-accent-purple dark:from-accent-purple dark:to-accent-pink">
                  Welcome to<br/>
                  Yashi's<br/>
                  Poetic World
                </span>
              </h1>
              
              <div className="h-24 mb-8">
                <p className="text-lg md:text-xl font-serif border-l-4 border-accent-indigo dark:border-accent-purple pl-4 text-gray-700 dark:text-gray-300">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              
              <div className="flex gap-4">
                <Link 
                  to="/poetry" 
                  className="btn btn-primary"
                >
                  Explore Poetry
                </Link>
                <Link 
                  to="/about" 
                  className="btn btn-secondary"
                >
                  About Me
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-in" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/20 to-accent-purple/20 dark:from-accent-purple/30 dark:to-accent-pink/30 rounded-3xl transform rotate-6 scale-105 blur-sm"></div>
                <div className="card glass overflow-hidden relative z-10">
                  <img 
                    src={require("../assets/images/profile3.jpg")} 
                    alt={biographyData.name}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h2 className="text-2xl font-display font-semibold mb-2">{biographyData.name}</h2>
                      <p className="text-light-300/90">{biographyData.tagline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-accent-indigo dark:bg-accent-purple rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </section>

      {/* Featured Poem Section */}
      <section className="py-24 px-4 bg-gradient-1">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-display font-bold mb-4">Featured Poetry</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-indigo to-accent-purple dark:from-accent-purple dark:to-accent-pink mx-auto"></div>
          </div>
          
          <div className="card animate-in hover:shadow-xl transition-all duration-500" style={{animationDelay: '0.2s'}}>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 hindi-text">
                {featuredPoems[featuredPoemIndex].title}
              </h3>
              
              <div className="prose prose-lg max-w-none mb-8 text-gray-700 dark:text-gray-300">
                {featuredPoems[featuredPoemIndex].content.split('\n').slice(0, 6).map((line, i) => (
                  <p key={i} className="mb-4 hindi-text">{line}</p>
                ))}
                {featuredPoems[featuredPoemIndex].content.split('\n').length > 6 && (
                  <p className="text-gray-500 dark:text-gray-400 italic">...</p>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-dark-300">
                <div>
                  <h4 className="text-lg font-medium mb-1">
                    {featuredPoems[featuredPoemIndex].english_title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {featuredPoems[featuredPoemIndex].date}
                  </p>
                </div>
                
                <Link 
                  to={`/poetry/${featuredPoems[featuredPoemIndex].id}`}
                  className="flex items-center gap-1 text-accent-indigo dark:text-accent-purple hover:text-accent-indigo/80 dark:hover:text-accent-purple/80 transition-colors group"
                >
                  <span>Read full poem</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Poems Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 md:mb-0">Recent Poems</h2>
            <Link 
              to="/poetry"
              className="flex items-center gap-1 text-accent-indigo dark:text-accent-purple hover:text-accent-indigo/80 dark:hover:text-accent-purple/80 transition-colors group"
            >
              <span>View all poems</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {poems.slice(0, 3).map((poem, index) => (
              <Link 
                to={`/poetry/${poem.id}`} 
                key={poem.id}
                className="animate-in card card-hover"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className={`h-2 ${index % 3 === 0 ? 'bg-accent-indigo' : index % 3 === 1 ? 'bg-accent-purple' : 'bg-accent-pink'}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-medium mb-3 hindi-text line-clamp-1">{poem.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3 hindi-text mb-4">
                    {poem.content.split('\n').slice(0, 2).join(' ')}...
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 dark:text-gray-400">{poem.date}</span>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Heart size={14} />
                      <span>{poem.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-24 px-4 bg-gradient-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-3xl font-display font-bold mb-6">About Me</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {biographyData.shortBio}
              </p>
              <Link 
                to="/about" 
                className="flex items-center gap-1 text-accent-indigo dark:text-accent-purple hover:text-accent-indigo/80 dark:hover:text-accent-purple/80 transition-colors group"
              >
                <span>Learn more about me</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* <div className="md:w-1/2 animate-in" style={{animationDelay: '0.4s'}}>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                    <img 
                      src={`https://via.placeholder.com/300?text=Image+${i}`}
                      alt="Gallery preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-in">
          <svg className="w-12 h-12 mx-auto mb-6 text-accent-indigo/30 dark:text-accent-purple/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-700 dark:text-gray-300 italic mb-6">
            "{biographyData.quote}"
          </p>
          <p className="text-lg font-medium text-accent-indigo dark:text-accent-purple">— Robert Frost</p>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;