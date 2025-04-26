// // src/pages/CreativeJourneyPage.js
// import React, { useEffect, useRef } from 'react';
// import PageTransition from '../components/layout/PageTransition';
// import { biographyData } from '../data/biography';
// import { BookOpen, Feather, CloudLightning, Sun, Moon } from 'lucide-react';

// const CreativeJourneyPage = () => {
//   const inspirationsRef = useRef(null);
//   const processRef = useRef(null);

//   useEffect(() => {
//     // Add animation to inspiration items
//     if (inspirationsRef.current) {
//       const items = inspirationsRef.current.querySelectorAll('.inspiration-item');
//       items.forEach((item, index) => {
//         setTimeout(() => {
//           item.classList.add('animate-in');
//         }, 300 + (index * 150));
//       });
//     }

//     // Add animation to process steps
//     if (processRef.current) {
//       const items = processRef.current.querySelectorAll('.process-step');
//       items.forEach((item, index) => {
//         setTimeout(() => {
//           item.classList.add('animate-in');
//         }, 300 + (index * 200));
//       });
//     }
//   }, []);

//   // Creative process steps
//   const creativeProcess = [
//     {
//       title: "Observation",
//       description: "I find inspiration in everyday moments - the way light filters through leaves, a conversation overheard in a café, or the feeling of nostalgia that suddenly washes over me.",
//       icon: <Sun className="w-8 h-8 text-accent-amber" />
//     },
//     {
//       title: "Contemplation",
//       description: "I let these observations simmer in my mind, connecting them to deeper emotions and universal experiences that we all share.",
//       icon: <Moon className="w-8 h-8 text-accent-indigo" />
//     },
//     {
//       title: "Inspiration",
//       description: "When the moment feels right, inspiration strikes - sometimes as a single line, other times as a complete concept for a poem.",
//       icon: <CloudLightning className="w-8 h-8 text-accent-purple" />
//     },
//     {
//       title: "Creation",
//       description: "I write without judgment, letting the words flow naturally. This raw expression captures the authentic emotion behind the poem.",
//       icon: <Feather className="w-8 h-8 text-accent-pink" />
//     },
//     {
//       title: "Refinement",
//       description: "Finally, I revisit and refine the poem, finding the perfect words and rhythm to convey my intended feeling while maintaining its emotional heart.",
//       icon: <BookOpen className="w-8 h-8 text-accent-blue" />
//     }
//   ];

//   // Inspirations
//   const inspirations = [
//     {
//       title: "Nature",
//       description: "The rhythm of seasons, the whisper of wind through trees, and the dance of light and shadow inspire many of my poems. Nature reminds us of our place in the world and the beauty in transience.",
//       image: "https://via.placeholder.com/600x400?text=Nature"
//     },
//     {
//       title: "Human Connections",
//       description: "Relationships in all their complexity - romantic love, friendship, family bonds - are central to my work. I explore both the profound joy and inevitable pain that comes with opening our hearts to others.",
//       image: "https://via.placeholder.com/600x400?text=Connections"
//     },
//     {
//       title: "Literature",
//       description: "The works of great poets and writers before me provide both inspiration and challenge. I find myself in conversation with them, learning from their craft while finding my own unique voice.",
//       image: "https://via.placeholder.com/600x400?text=Literature"
//     },
//     {
//       title: "Everyday Moments",
//       description: "There is magic in mundane moments - a shared glance, a cup of tea, the familiar route home. These small instances often reveal the most profound truths about our existence.",
//       image: "https://via.placeholder.com/600x400?text=Moments"
//     }
//   ];

//   // Current inspirations
//   const currentInspirations = [
//     {
//       category: "Reading",
//       item: "The Carrying by Ada Limón",
//       image: "https://via.placeholder.com/200x300?text=Book"
//     },
//     {
//       category: "Listening",
//       item: "Instrumental piano and ambient soundscapes",
//       image: "https://via.placeholder.com/200x200?text=Music"
//     },
//     {
//       category: "Exploring",
//       item: "Dawn walks by the riverside",
//       image: "https://via.placeholder.com/200x160?text=Nature"
//     },
//     {
//       category: "Learning",
//       item: "Traditional poetic forms from around the world",
//       image: "https://via.placeholder.com/200x160?text=Learning"
//     }
//   ];

//   return (
//     <PageTransition>
//       {/* Hero Section */}
//       <section className="py-24 px-4 bg-gradient-1">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-in">
//             My Creative Journey
//           </h1>
//           <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-in" style={{animationDelay: '0.1s'}}>
//             Explore the process, inspirations, and evolution behind my poetry. Every word begins as a feeling, an observation, or a question.
//           </p>
//         </div>
//       </section>

//       {/* Creative Process Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
//             My Creative Process
//           </h2>
          
//           <div ref={processRef} className="grid grid-cols-1 md:grid-cols-5 gap-6">
//             {creativeProcess.map((step, index) => (
//               <div 
//                 key={index} 
//                 className="process-step opacity-0 translate-y-4 card p-6 flex flex-col items-center text-center"
//               >
//                 <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center mb-4">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-xl font-display font-semibold mb-3">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-700 dark:text-gray-300 text-sm">
//                   {step.description}
//                 </p>
                
//                 {/* Connector (except for last item) */}
//                 {index < creativeProcess.length - 1 && (
//                   <div className="hidden md:block absolute right-0 top-1/2 w-6 h-0.5 bg-gray-200 dark:bg-dark-100"></div>
//                 )}
//               </div>
//             ))}
//           </div>
          
//           {/* Process Image */}
//           <div className="mt-16 animate-in" style={{animationDelay: '0.6s'}}>
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 to-accent-purple/10 dark:from-accent-indigo/20 dark:to-accent-purple/20 rounded-xl"></div>
//               <div className="card overflow-hidden">
//                 <img 
//                   src="https://via.placeholder.com/1200x600?text=Writing+Process"
//                   alt="Writing process"
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Inspirations Section */}
//       <section className="py-20 px-4 bg-gradient-2">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
//             What Inspires Me
//           </h2>
          
//           <div ref={inspirationsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {inspirations.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="inspiration-item opacity-0 translate-y-4 card overflow-hidden"
//               >
//                 <div className="aspect-video">
//                   <img 
//                     src={item.image} 
//                     alt={item.title} 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-display font-semibold mb-3">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-700 dark:text-gray-300">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Current Inspirations */}
//       <section className="py-20 px-4">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
//             Currently Inspiring Me
//           </h2>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {currentInspirations.map((item, index) => (
//               <div 
//                 key={index}
//                 className="animate-in card overflow-hidden hover:shadow-lg transition-all duration-300"
//                 style={{animationDelay: `${0.1 * (index + 1)}s`}}
//               >
//                 <div className="aspect-square bg-gray-100 dark:bg-dark-100 flex items-center justify-center">
//                   <img 
//                     src={item.image}
//                     alt={item.category}
//                     className="max-w-full max-h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-5 text-center">
//                   <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
//                     {item.category}
//                   </h3>
//                   <p className="text-gray-800 dark:text-gray-200 font-medium">
//                     {item.item}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Writing Space Section */}
//       <section className="py-20 px-4 bg-gradient-3">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/2 animate-in" style={{animationDelay: '0.2s'}}>
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-gradient-to-br from-accent-pink/20 to-accent-amber/20 dark:from-accent-pink/30 dark:to-accent-amber/30 blur-lg rounded-xl"></div>
//                 <div className="card overflow-hidden">
//                   <img 
//                     src="https://via.placeholder.com/800x600?text=Writing+Space"
//                     alt="My writing space"
//                     className="w-full h-auto"
//                   />
//                 </div>
//               </div>
//             </div>
            
//             <div className="md:w-1/2 animate-in" style={{animationDelay: '0.3s'}}>
//               <h2 className="text-3xl font-display font-bold mb-6">
//                 Where I Create
//               </h2>
//               <div className="prose prose-lg dark:prose-invert max-w-none">
//                 <p>
//                   The environment where I write significantly influences my poetry. I've created a space 
//                   that nurtures creativity and allows me to slip easily into a reflective state of mind.
//                 </p>
//                 <p>
//                   My desk faces a window that overlooks a small garden. Natural light changes throughout 
//                   the day, painting the room in different moods - from the soft hope of morning light to 
//                   the nostalgic glow of sunset.
//                 </p>
//                 <p>
//                   I keep my space minimal but meaningful - a few cherished books, a plant or two, and small 
//                   mementos that ground me in memories while leaving space for new ideas to bloom.
//                 </p>
//                 <p>
//                   However, I also believe that poetry happens everywhere. Some of my best work has been 
//                   conceived during walks, in busy cafés, or in the quiet moments before sleep. I always 
//                   carry a small notebook to capture those unexpected flashes of inspiration.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quote Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center animate-in">
//           <div className="card glass p-8 md:p-12">
//             <svg className="w-12 h-12 mx-auto mb-6 text-accent-indigo/30 dark:text-accent-purple/30" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//             </svg>
//             <p className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 dark:text-gray-200 italic mb-6">
//               "The poet's job is to put into words those feelings we all have that are so deep, so important, and yet so difficult to name."
//             </p>
//             <p className="text-lg font-medium text-accent-indigo dark:text-accent-purple">— Jane Kenyon</p>
//           </div>
//         </div>
//       </section>
//     </PageTransition>
//   );
// };

// export default CreativeJourneyPage;

// src/pages/CreativeJourneyPage.js
import React, { useEffect, useRef } from 'react';
import PageTransition from '../components/layout/PageTransition';
import { biographyData } from '../data/biography';
import { BookOpen, Feather, CloudLightning, Sun, Moon, Book, Music, Compass, GraduationCap } from 'lucide-react';

const CreativeJourneyPage = () => {
  const inspirationsRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    // Add animation to inspiration items
    if (inspirationsRef.current) {
      const items = inspirationsRef.current.querySelectorAll('.inspiration-item');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-in');
        }, 300 + (index * 150));
      });
    }

    // Add animation to process steps
    if (processRef.current) {
      const items = processRef.current.querySelectorAll('.process-step');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-in');
        }, 300 + (index * 200));
      });
    }
  }, []);

  // Creative process steps
  const creativeProcess = [
    {
      title: "Observation",
      description: "I find inspiration in everyday moments - the way light filters through leaves, a conversation overheard in a café, or the feeling of nostalgia that suddenly washes over me.",
      icon: <Sun className="w-8 h-8 text-accent-amber" />
    },
    {
      title: "Contemplation",
      description: "I let these observations simmer in my mind, connecting them to deeper emotions and universal experiences that we all share.",
      icon: <Moon className="w-8 h-8 text-accent-indigo" />
    },
    {
      title: "Inspiration",
      description: "When the moment feels right, inspiration strikes - sometimes as a single line, other times as a complete concept for a poem.",
      icon: <CloudLightning className="w-8 h-8 text-accent-purple" />
    },
    {
      title: "Creation",
      description: "I write without judgment, letting the words flow naturally. This raw expression captures the authentic emotion behind the poem.",
      icon: <Feather className="w-8 h-8 text-accent-pink" />
    },
    {
      title: "Refinement",
      description: "Finally, I revisit and refine the poem, finding the perfect words and rhythm to convey my intended feeling while maintaining its emotional heart.",
      icon: <BookOpen className="w-8 h-8 text-accent-blue" />
    }
  ];

  // Inspirations
  const inspirations = [
    {
      title: "Nature",
      description: "The rhythm of seasons, the whisper of wind through trees, and the dance of light and shadow inspire many of my poems. Nature reminds us of our place in the world and the beauty in transience."
    },
    {
      title: "Human Connections",
      description: "Relationships in all their complexity - romantic love, friendship, family bonds - are central to my work. I explore both the profound joy and inevitable pain that comes with opening our hearts to others."
    },
    {
      title: "Literature",
      description: "The works of great poets and writers before me provide both inspiration and challenge. I find myself in conversation with them, learning from their craft while finding my own unique voice."
    },
    {
      title: "Everyday Moments",
      description: "There is magic in mundane moments - a shared glance, a cup of tea, the familiar route home. These small instances often reveal the most profound truths about our existence."
    }
  ];

  // Current inspirations
  const currentInspirations = [
    {
      category: "Reading",
      item: "The Carrying by Ada Limón",
      icon: <Book className="w-6 h-6 text-accent-indigo" />
    },
    {
      category: "Listening",
      item: "Instrumental piano and ambient soundscapes",
      icon: <Music className="w-6 h-6 text-accent-purple" />
    },
    {
      category: "Exploring",
      item: "Dawn walks by the riverside",
      icon: <Compass className="w-6 h-6 text-accent-pink" />
    },
    {
      category: "Learning",
      item: "Traditional poetic forms from around the world",
      icon: <GraduationCap className="w-6 h-6 text-accent-amber" />
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-1">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-in">
            My Creative Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-in" style={{animationDelay: '0.1s'}}>
            Explore the process, inspirations, and evolution behind my poetry. Every word begins as a feeling, an observation, or a question.
          </p>
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
            My Creative Process
          </h2>
          
          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {creativeProcess.map((step, index) => (
              <div 
                key={index} 
                className="process-step opacity-0 translate-y-4 card p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
                
                {/* Connector (except for last item) */}
                {index < creativeProcess.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-6 h-0.5 bg-gray-200 dark:bg-dark-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirations Section */}
      <section className="py-20 px-4 bg-gradient-2">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
            What Inspires Me
          </h2>
          
          <div ref={inspirationsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inspirations.map((item, index) => (
              <div 
                key={index} 
                className="inspiration-item opacity-0 translate-y-4 card p-6 border-t-4 border-accent-indigo dark:border-accent-purple"
              >
                <h3 className="text-xl font-display font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Inspirations */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center animate-in">
            Currently Inspiring Me
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentInspirations.map((item, index) => (
              <div 
                key={index}
                className="animate-in card p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  {item.category}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {item.item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Space Section - Text Only */}
      <section className="py-20 px-4 bg-gradient-3">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">
            Where I Create
          </h2>
          <div className="card p-8 prose prose-lg dark:prose-invert max-w-none">
            <p>
              The environment where I write significantly influences my poetry. I've created a space 
              that nurtures creativity and allows me to slip easily into a reflective state of mind.
            </p>
            <p>
              My desk faces a window that overlooks a small garden. Natural light changes throughout 
              the day, painting the room in different moods - from the soft hope of morning light to 
              the nostalgic glow of sunset.
            </p>
            <p>
              I keep my space minimal but meaningful - a few cherished books, a plant or two, and small 
              mementos that ground me in memories while leaving space for new ideas to bloom.
            </p>
            <p>
              However, I also believe that poetry happens everywhere. Some of my best work has been 
              conceived during walks, in busy cafés, or in the quiet moments before sleep. I always 
              carry a small notebook to capture those unexpected flashes of inspiration.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-in">
          <div className="card glass p-8 md:p-12">
            <svg className="w-12 h-12 mx-auto mb-6 text-accent-indigo/30 dark:text-accent-purple/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 dark:text-gray-200 italic mb-6">
              "The poet's job is to put into words those feelings we all have that are so deep, so important, and yet so difficult to name."
            </p>
            <p className="text-lg font-medium text-accent-indigo dark:text-accent-purple">— Jane Kenyon</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CreativeJourneyPage;