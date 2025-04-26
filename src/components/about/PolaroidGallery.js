import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { galleryImages } from '../../data/gallery';

const PolaroidGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const polaroids = galleryRef.current.querySelectorAll('.polaroid');
    
    gsap.fromTo(
      polaroids,
      { 
        opacity: 0, 
        y: 30,
        rotation: () => Math.random() * 10 - 5 
      },
      { 
        opacity: 1, 
        y: 0,
        duration: 0.8, 
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div ref={galleryRef} className="my-16">
      <h2 className="text-3xl font-serif mb-12 text-center hindi-text">मेरी तस्वीरें</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className={`polaroid bg-white p-3 shadow-md transform hover:rotate-0 hover:scale-105 transition-transform duration-300 ease-out`}
            style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
          >
            <div className="aspect-w-4 aspect-h-3 mb-3 overflow-hidden bg-gray-100">
              {/* Replace with actual images when customizing */}
              <img 
                src={`/api/placeholder/600/400?text=Image+${image.id}`} 
                alt={image.description}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-gray-700 p-2 font-handwritten hindi-text">
              {image.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolaroidGallery; 