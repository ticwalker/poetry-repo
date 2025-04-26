// src/components/poetry/FeaturedPoem.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedPoem = ({ poem }) => {
  const featuredRef = useRef(null);

  useEffect(() => {
    const el = featuredRef.current;
    
    // Use GSAP if available
    if (window.gsap) {
      window.gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );
    }
  }, []);

  // Get first 6 lines of the poem for preview
  const previewLines = poem.content.split('\n').filter(line => line.trim() !== '').slice(0, 6);

  return (
    <div 
      ref={featuredRef}
      className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl overflow-hidden shadow-lg p-8 lg:p-12"
    >
      <h2 className="text-2xl md:text-3xl font-serif mb-2">Featured Poem</h2>
      <div className="w-16 h-1 bg-indigo-500 mb-8"></div>
      
      <div className="lg:flex gap-12">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h3 className="text-2xl font-serif mb-6 text-indigo-900 hindi-text">{poem.title}</h3>
          <div className="space-y-4">
            {previewLines.map((line, index) => (
              <p key={index} className="text-gray-700 hindi-text">{line}</p>
            ))}
            {poem.content.split('\n').length > 6 && (
              <p className="text-gray-500 italic">...</p>
            )}
          </div>
          <Link 
            to={`/poetry/${poem.id}`}
            className="inline-flex items-center gap-1 mt-8 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <span>Read full poem</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="lg:w-1/2 bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-lg">
          <h4 className="text-lg font-medium mb-4">About this poem</h4>
          <p className="text-gray-700 mb-4">
            This poem explores themes of nature and life's subtleties. The poet has woven her emotions and experiences into words.
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Created:</span> {poem.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPoem;