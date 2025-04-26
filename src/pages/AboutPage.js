// src/pages/CreativeJourneyPage// src/pages/AboutPage.js
import React, { useEffect, useRef } from 'react';
import PageTransition from '../components/layout/PageTransition';
import { biographyData } from '../data/biography';
import { Camera, BookOpen, Music, Heart, Coffee, MapPin } from 'lucide-react';

const AboutPage = () => {
  const timelineRef = useRef(null);
  const factsRef = useRef(null);

  useEffect(() => {
    // Add animation class to timeline items sequentially
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-in');
        }, 300 + (index * 150));
      });
    }

    // Add animation to fun facts
    if (factsRef.current) {
      const items = factsRef.current.querySelectorAll('.fact-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-in');
        }, 300 + (index * 100));
      });
    }
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-1">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-in">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-in" style={{animationDelay: '0.1s'}}>
            {biographyData.shortBio}
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="md:w-2/5 animate-in" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-indigo to-accent-purple dark:from-accent-purple dark:to-accent-pink opacity-20 blur-lg rounded-xl"></div>
                <div className="card overflow-hidden">
                  <img 
                    src={require("../assets/images/profile3.jpg")} 
                    alt={biographyData.name}
                    className="w-full h-auto aspect-[3/4] object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="md:w-3/5">
              <h2 className="text-3xl font-display font-bold mb-6 animate-in" style={{animationDelay: '0.3s'}}>
                <span className="gradient-text from-accent-indigo to-accent-purple dark:from-accent-purple dark:to-accent-pink">
                  Hello, I'm {biographyData.name}
                </span>
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none mb-8 animate-in" style={{animationDelay: '0.4s'}}>
                <p>
                  I'm a poet and creative soul with a passion for capturing emotions through words. 
                  My journey into poetry began as a way to express feelings that couldn't be 
                  conveyed through everyday conversation.
                </p>
                <p>
                  Through my poetry, I explore themes of love, connection, nature, and the human experience. 
                  I believe poetry has the power to bridge gaps between hearts and minds, creating 
                  understanding where words might otherwise fail.
                </p>
                <p>
                  When I'm not writing, you might find me wandering through nature, lost in a good book, 
                  or searching for inspiration in quiet coffee shops.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 animate-in" style={{animationDelay: '0.5s'}}>
                <span className="px-4 py-2 rounded-full bg-accent-indigo/10 dark:bg-accent-indigo/20 text-accent-indigo dark:text-accent-purple flex items-center gap-2">
                  <BookOpen size={16} />
                  <span>Poetry</span>
                </span>
                <span className="px-4 py-2 rounded-full bg-accent-purple/10 dark:bg-accent-purple/20 text-accent-purple flex items-center gap-2">
                  <Music size={16} />
                  <span>Music</span>
                </span>
                <span className="px-4 py-2 rounded-full bg-accent-pink/10 dark:bg-accent-pink/20 text-accent-pink flex items-center gap-2">
                  <Camera size={16} />
                  <span>Photography</span>
                </span>
                <span className="px-4 py-2 rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 text-accent-blue flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Travel</span>
                </span>
                <span className="px-4 py-2 rounded-full bg-accent-amber/10 dark:bg-accent-amber/20 text-accent-amber flex items-center gap-2">
                  <Coffee size={16} />
                  <span>Coffee</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-4 bg-gradient-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
            Getting to Know Me
          </h2>
          
          <div ref={factsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {biographyData.funFacts.map((fact, index) => (
              <div 
                key={index} 
                className="fact-item opacity-0 translate-y-4 card p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-display font-semibold mb-3 text-accent-indigo dark:text-accent-purple">
                  {fact.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {fact.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
            My Journey
          </h2>
          
          <div ref={timelineRef} className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-dark-100 transform md:translate-x-px"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {biographyData.journey.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`timeline-item opacity-0 translate-y-4 relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-7 h-7 bg-white dark:bg-dark-200 border-4 border-accent-indigo dark:border-accent-purple rounded-full transform -translate-x-3 md:-translate-x-3.5 z-10"></div>
                  
                  {/* Date */}
                  <div className="w-full md:w-1/2 pb-4 md:pb-0 md:px-8 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-accent-indigo/10 dark:bg-accent-indigo/20 text-accent-indigo dark:text-accent-purple font-medium">
                      {milestone.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-8 md:px-8">
                    <div className="card p-6">
                      <h3 className="text-xl font-display font-semibold mb-2">
                        {milestone.milestone}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-gradient-3">
        <div className="max-w-4xl mx-auto text-center animate-in">
          <div className="card glass p-8 md:p-12">
            <svg className="w-12 h-12 mx-auto mb-6 text-accent-indigo/30 dark:text-accent-purple/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 dark:text-gray-200 italic mb-6">
              "{biographyData.quote}"
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-indigo to-accent-purple dark:from-accent-purple dark:to-accent-pink mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
            Photo Gallery
          </h2> */}
          
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div 
                key={index}
                className="animate-in aspect-square rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <img 
                src={require("../assets/images/profile.jpg")} 
                alt={biographyData.name} 
                className="w-full h-full object-cover"
                />
                </div>
            ))}
          </div> */}
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;