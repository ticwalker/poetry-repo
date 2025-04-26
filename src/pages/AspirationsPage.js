// src/pages/AspirationsPage.js
import React, { useEffect, useRef } from 'react';
import PageTransition from '../components/layout/PageTransition';
import { biographyData } from '../data/biography';
import { Book, Calendar, Users, Star } from 'lucide-react';

const AspirationsPage = () => {
  const aspirationsRef = useRef(null);

  useEffect(() => {
    // Add animation to aspirations
    if (aspirationsRef.current) {
      const items = aspirationsRef.current.querySelectorAll('.aspiration-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-in');
        }, 300 + (index * 150));
      });
    }
  }, []);

  // Milestone cards
  const milestones = [
    {
      title: "100 Poems",
      description: "Complete a collection of 100 polished poems that represent my unique voice and perspective.",
      icon: <Book className="w-8 h-8 text-accent-indigo" />,
      progress: 75
    },
    {
      title: "Published Poet",
      description: "Have my work published and available to readers around the world.",
      icon: <Star className="w-8 h-8 text-accent-purple" />,
      progress: 40
    },
    {
      title: "Poetry Community",
      description: "Build a community of poets and readers who connect through shared experiences and emotions.",
      icon: <Users className="w-8 h-8 text-accent-pink" />,
      progress: 60
    },
    {
      title: "Annual Event",
      description: "Establish an annual poetry reading event that showcases diverse voices and perspectives.",
      icon: <Calendar className="w-8 h-8 text-accent-amber" />,
      progress: 20
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-1">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-in">
            Dreams & Aspirations
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-in" style={{animationDelay: '0.1s'}}>
            The visions that guide my creative journey and the milestones I'm working toward as a poet.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gradient-2">
        <div className="max-w-5xl mx-auto">
          <div className="card glass p-8 md:p-12 text-center animate-in">
            <h2 className="text-3xl font-display font-bold mb-8">My Philosophy</h2>
            <p className="text-xl md:text-2xl font-serif text-gray-800 dark:text-gray-200 italic mb-8">
              "Every day is a new beginning, every poem a new journey."
            </p>
            <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
              <p>
                I believe that poetry has the power to transform both the writer and the reader. 
                Through my work, I strive to create moments of connection, reflection, and revelation.
              </p>
              <p>
                My approach to writing is both disciplined and intuitive. I commit to regular practice 
                while remaining open to unexpected inspiration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aspirations Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
            My Aspirations
          </h2>
          
          <div ref={aspirationsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {biographyData.aspirations.map((aspiration, index) => (
              <div 
                key={index} 
                className="aspiration-item opacity-0 translate-y-4 card p-6 border-l-4 border-accent-indigo dark:border-accent-purple hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-display font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  <span className="mr-2 text-accent-indigo dark:text-accent-purple">✦</span>
                  {aspiration}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
            Milestones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="animate-in card p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center mb-4">
                  {milestone.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
                  {milestone.description}
                </p>
                
                {/* Progress bar */}
                <div className="w-full mt-auto">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="font-medium text-accent-indigo dark:text-accent-purple">{milestone.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-gradient-to-r from-accent-indigo to-accent-purple dark:from-accent-purple dark:to-accent-pink h-2.5 rounded-full"
                      style={{width: `${milestone.progress}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AspirationsPage;