// src/components/poetry/PoemDisplay.js
import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageCircle, Share2, Volume2, VolumeX, ArrowLeft, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const PoemDisplay = ({ poem }) => {
  const [soundOn, setSoundOn] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);
  const [backgroundIndex, setBackgroundIndex] = useState(poem.backgroundIndex || 0);
  const [showInfo, setShowInfo] = useState(false);
  const observerRef = useRef(null);
  const lineRefs = useRef([]);
  const poemRef = useRef(null);

  const backgrounds = [
    'bg-gradient-to-br from-accent-indigo/10 to-accent-purple/10 dark:from-accent-indigo/20 dark:to-accent-purple/20',
    'bg-gradient-to-br from-accent-blue/10 to-accent-teal/10 dark:from-accent-blue/20 dark:to-accent-teal/20',
    'bg-gradient-to-br from-accent-pink/10 to-accent-amber/10 dark:from-accent-pink/20 dark:to-accent-amber/20'
  ];

  useEffect(() => {
    // Animation for poem entrance
    const el = poemRef.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    }

    // Change background every 15 seconds
    const intervalId = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
    }, 15000);

    // Set up intersection observer for line reveal
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lineIndex = parseInt(entry.target.dataset.index);
              setVisibleLines((prev) => {
                if (!prev.includes(lineIndex)) {
                  return [...prev, lineIndex].sort((a, b) => a - b);
                }
                return prev;
              });
            }
          });
        },
        { threshold: 0.5, rootMargin: "0px 0px -5% 0px" }
      );

      // Observe line elements after a short delay to ensure they're in the DOM
      setTimeout(() => {
        lineRefs.current.forEach((ref) => {
          if (ref && observerRef.current) {
            observerRef.current.observe(ref);
          }
        });
      }, 500);
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      setVisibleLines(Array.from({ length: poemLines.length }, (_, i) => i));
    }

    return () => {
      clearInterval(intervalId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [backgrounds.length]);

  // Animation for heart
  const handleLike = () => {
    setLiked(!liked);
  };

  // Sound toggle
  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  // Bookmark toggle
  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  // Split poem content into lines
  const poemLines = poem.content.split('\n').filter(line => line.trim() !== '');

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      {/* Back button and controls */}
      <div className="fixed top-20 left-0 right-0 z-30 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm py-3 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <Link 
            to="/poetry" 
            className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-accent-indigo dark:hover:text-accent-purple transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to poems</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleBookmark} 
              className={`p-2 rounded-full transition-all duration-200 ${
                bookmarked 
                  ? 'bg-accent-amber/20 text-accent-amber' 
                  : 'bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark poem"}
            >
              <Bookmark size={18} fill={bookmarked ? "currentColor" : "none"} />
            </button>
            
            <button 
              onClick={toggleSound} 
              className={`p-2 rounded-full transition-all duration-200 ${
                soundOn 
                  ? 'bg-accent-blue/20 text-accent-blue' 
                  : 'bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
              aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
            >
              {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
            
            <button 
              onClick={() => setShowInfo(!showInfo)}
              className={`p-2 rounded-full transition-all duration-200 ${
                showInfo 
                  ? 'bg-accent-indigo/20 text-accent-indigo dark:text-accent-purple' 
                  : 'bg-gray-100 dark:bg-dark-100 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
              aria-label={showInfo ? "Hide poem info" : "Show poem info"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main poem display */}
      <div 
        ref={poemRef}
        className={`flex-grow transition-colors duration-1000 ease-in-out ${backgrounds[backgroundIndex]} flex flex-col items-center justify-center p-6 pb-24`}
      >
        <div className="max-w-3xl w-full bg-white/90 dark:bg-dark-100/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 relative">
          {/* Poem title */}
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-10 text-center hindi-text">
            {poem.title}
          </h1>

          {/* Poem Content */}
          <div className="space-y-6 mb-12">
            {poemLines.map((line, index) => (
              <p
                key={index}
                ref={el => lineRefs.current[index] = el}
                data-index={index}
                className={`text-lg md:text-xl hindi-text leading-relaxed transition-all duration-1000 
                  ${visibleLines.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'}`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Poem Footer */}
          <div className="border-t border-gray-200 dark:border-dark-300 pt-6 mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-display font-medium mb-1">
                  {poem.english_title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {poem.date}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleLike} 
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                    liked 
                      ? 'bg-accent-pink/20 text-accent-pink' 
                      : 'bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300'
                  }`}
                  aria-label={liked ? "Unlike poem" : "Like poem"}
                >
                  <Heart size={16} fill={liked ? "currentColor" : "none"} />
                  <span>{liked ? poem.likes + 1 : poem.likes}</span>
                </button>
                
                <button 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300 transition-all duration-200"
                  aria-label="View comments"
                >
                  <MessageCircle size={16} />
                  <span>{poem.comments}</span>
                </button>
                
                <button 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300 transition-all duration-200"
                  aria-label="Share poem"
                >
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Poem Info Overlay */}
          <div className={`absolute inset-0 bg-white/95 dark:bg-dark-100/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 transition-all duration-500 ${
            showInfo ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <button 
              onClick={() => setShowInfo(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-dark-300 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300 transition-all duration-200"
              aria-label="Close info"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <h2 className="text-2xl font-display font-bold mb-4">About this poem</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Hindi Title</h3>
                <p className="text-gray-700 dark:text-gray-300 hindi-text mb-4">{poem.title}</p>
                
                <h3 className="text-lg font-medium mb-2">English Title</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{poem.english_title}</p>
                
                <h3 className="text-lg font-medium mb-2">Created</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{poem.date}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{poem.english_description}</p>
                
                <h3 className="text-lg font-medium mb-2">Theme</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-accent-indigo/10 dark:bg-accent-indigo/20 text-accent-indigo dark:text-accent-purple">
                    Love
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-accent-pink/10 dark:bg-accent-pink/20 text-accent-pink">
                    Relationships
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-accent-blue/10 dark:bg-accent-blue/20 text-accent-blue">
                    Emotion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoemDisplay;