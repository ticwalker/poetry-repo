import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { biographyData } from '../../data/biography';

const Biography = () => {
  const bioRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Bio section animation
    gsap.fromTo(
      bioRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Timeline animation
    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    gsap.fromTo(
      timelineItems,
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5, 
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Bio section */}
      <div ref={bioRef} className="mb-16">
        <h2 className="text-3xl font-serif mb-8 text-center hindi-text">मेरी कहानी</h2>
        
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-8">
          <p className="text-lg mb-6 hindi-text">{biographyData.shortBio}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {biographyData.funFacts.map((fact, index) => (
              <div 
                key={index} 
                className="bg-indigo-50 rounded-lg p-5 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium mb-2 text-indigo-800 hindi-text">{fact.question}</h3>
                <p className="text-gray-700 hindi-text">{fact.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Timeline section */}
      <div ref={timelineRef} className="relative">
        <h2 className="text-3xl font-serif mb-12 text-center hindi-text">मेरी यात्रा</h2>
        
        <div className="border-l-2 border-indigo-300 ml-6 md:ml-0 md:mx-auto md:max-w-2xl">
          {biographyData.journey.map((milestone, index) => (
            <div 
              key={index} 
              className="timeline-item mb-12 ml-6 md:ml-8 relative before:content-[''] before:absolute before:w-4 before:h-4 before:bg-indigo-500 before:rounded-full before:-left-10 before:top-1.5"
            >
              <div className="bg-white rounded-lg shadow-md p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-3">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-medium mb-2 hindi-text">{milestone.milestone}</h3>
                <p className="text-gray-700 hindi-text">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Biography;