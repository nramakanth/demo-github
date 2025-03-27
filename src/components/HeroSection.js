import React, { useState, useEffect } from 'react';
import backgroundImage from '../images/herosectionbg2.png';

const HeroSection = () => {
  const synonyms = ["Shopping", "Purchasing", "Buying", "Retail Therapy", "Acquiring"];
  const [currentSynonym, setCurrentSynonym] = useState(synonyms[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSynonym(prev => {
        const currentIndex = synonyms.indexOf(prev);
        const nextIndex = (currentIndex + 1) % synonyms.length;
        return synonyms[nextIndex];
      });
    }, 3000); // Change the synonym every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [synonyms]);

  return (
    <section
      className="hero-section h-screen bg-cover bg-center flex items-center text-white object-cover"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
      
      }}
    >
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="text-center p-4">
          <div className='flex flex-col'>
            <div className='items-center justify-center flex flex-col' data-aos="fade-right">
              <h1 className="text-4xl font-bold text-black leading-10">
                Explore Endless Possibilities in <span className='gradient-text'> {currentSynonym} </span> 
              </h1>
              <p className="text-lg mt-6 text-gray-600 tracking-widest w-1/2 leading-8">
              Discover curated collections for your lifestyle from fashion to home decor and more.
              </p>
            </div>
            <div>
              <button className='px-8 bg-red-500 text-white py-3 mt-16 rounded-md hover:bg-red-600' data-aos="fade-up">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
