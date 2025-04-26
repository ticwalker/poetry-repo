// src/pages/PoetryPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';
import PoemDisplay from '../components/poetry/PoemDisplay';
import { poems } from '../data/poems';
import { Link } from 'react-router-dom';

const PoetryPage = () => {
  const { id } = useParams();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPoems, setFilteredPoems] = useState(poems);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [singlePoemMode, setSinglePoemMode] = useState(false);
  const [currentPoem, setCurrentPoem] = useState(null);
  const [poemNotFound, setPoemNotFound] = useState(false);
  
  // Set single poem mode if ID is provided
  useEffect(() => {
    if (id) {
      setSinglePoemMode(true);
      const poemId = parseInt(id);
      const poem = poems.find(p => p.id === poemId);
      
      if (poem) {
        setCurrentPoem(poem);
        setPoemNotFound(false);
      } else {
        setCurrentPoem(null);
        setPoemNotFound(true);
      }
    } else {
      setSinglePoemMode(false);
      setCurrentPoem(null);
      setPoemNotFound(false);
    }
  }, [id]);
  
  // Filter and search poems
  useEffect(() => {
    if (!singlePoemMode) {
      let result = [...poems];
      
      // Apply category filter
      if (filter !== 'all') {
        result = result.filter(poem => poem.featured);
      }
      
      // Apply search filter
      if (searchTerm.trim() !== '') {
        const search = searchTerm.toLowerCase();
        result = result.filter(poem => 
          poem.title.toLowerCase().includes(search) || 
          poem.english_title.toLowerCase().includes(search) ||
          poem.content.toLowerCase().includes(search) ||
          poem.english_description.toLowerCase().includes(search)
        );
      }
      
      setFilteredPoems(result);
      
      // Set up animation sequence for items
      const timer = setTimeout(() => {
        const ids = result.map(poem => poem.id);
        setAnimatedItems(ids);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [filter, searchTerm, singlePoemMode]);

  // Define category filters
  const filterOptions = [
    { value: 'all', label: 'All Poems' },
    { value: 'featured', label: 'Featured' },
  ];

  // Render poem not found message
  if (singlePoemMode && poemNotFound) {
    return (
      <PageTransition>
        <div className="min-h-screen py-24 px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-display font-bold mb-6">Poem Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sorry, we couldn't find the poem you're looking for.
          </p>
          <Link 
            to="/poetry" 
            className="btn btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Poetry
          </Link>
        </div>
      </PageTransition>
    );
  }
  
  // Render single poem display
  if (singlePoemMode && currentPoem) {
    return (
      <PageTransition>
        <PoemDisplay poem={currentPoem} />
      </PageTransition>
    );
  }

  // Render poetry collection
  return (
    <PageTransition>
      <div className="min-h-screen py-20">
        {/* Hero section */}
        <div className="bg-gradient-1 py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 animate-in">
              Poems
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 animate-in" style={{animationDelay: '0.1s'}}>
              Explore a collection of poems that capture emotions, moments, and reflections on life and love.
            </p>
            
            {/* Search and filter bar */}
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4 animate-in" style={{animationDelay: '0.2s'}}>
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search poems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-dark-100 border border-gray-200 dark:border-dark-300 focus:ring-2 focus:ring-accent-indigo dark:focus:ring-accent-purple focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div className="relative min-w-[200px]">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Filter size={18} className="text-gray-400" />
                </div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-dark-100 border border-gray-200 dark:border-dark-300 focus:ring-2 focus:ring-accent-indigo dark:focus:ring-accent-purple focus:border-transparent outline-none appearance-none transition-all cursor-pointer"
                >
                  {filterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Poems grid */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {filteredPoems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPoems.map((poem, index) => (
                <Link 
                  to={`/poetry/${poem.id}`} 
                  key={poem.id}
                  className={`card card-hover transform transition-all duration-500 ${
                    animatedItems.includes(poem.id) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-display font-medium mb-2 hindi-text">{poem.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{poem.english_title}</p>
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-3 hindi-text mb-4">
                      {poem.content.split('\n').slice(0, 2).join(' ')}...
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {poem.english_description}
                    </p>
                    <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-200 dark:border-dark-300">
                      <span className="text-gray-500 dark:text-gray-400">{poem.date}</span>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs bg-accent-indigo/10 dark:bg-accent-indigo/20 text-accent-indigo dark:text-accent-purple">
                          Read Poem
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-dark-300 flex items-center justify-center">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">No poems found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                onClick={() => {setSearchTerm(''); setFilter('all');}}
                className="btn btn-secondary"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default PoetryPage;