// src/components/poetry/PoemGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const PoemGrid = ({ poems }) => {
  const backgrounds = [
    'bg-rose-100',
    'bg-blue-100',
    'bg-amber-100',
    'bg-purple-100',
    'bg-emerald-100'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {poems.map((poem, index) => (
        <Link 
          to={`/poetry/${poem.id}`} 
          key={poem.id}
          className="group"
        >
          <div className={`${backgrounds[index % backgrounds.length]} rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-serif mb-3 group-hover:text-indigo-700 transition-colors hindi-text">
                {poem.title}
              </h3>
              <p className="text-gray-700 line-clamp-3 hindi-text">
                {poem.content.split('\n').slice(0, 3).join(' ')}...
              </p>
            </div>
            <div className="border-t border-gray-200 p-4 flex justify-between items-center">
              <span className="text-sm text-gray-500 hindi-text">{poem.date}</span>
              <div className="flex items-center gap-1 text-gray-500">
                <Heart size={16} />
                <span>{poem.likes}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PoemGrid;