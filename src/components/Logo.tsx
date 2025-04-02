
import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="#D73618" fillOpacity="0.1" />
      <circle cx="40" cy="40" r="32" stroke="#D73618" strokeWidth="1.5" />
      <path d="M40 8C50.7304 8 60.9394 12.4285 68.2843 20.5147C75.6293 28.601 80 39.7827 80 51.5" stroke="#D73618" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M40 8C29.2696 8 19.0606 12.4285 11.7157 20.5147C4.37068 28.601 0 39.7827 0 51.5" stroke="#D73618" strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M40 20L42.3511 30.1489H52.9434L44.2961 36.7021L46.6472 46.8511L40 40.2979L33.3528 46.8511L35.7039 36.7021L27.0566 30.1489H37.6489L40 20Z" fill="#D73618" />
      <path d="M40 48C44.4183 48 48 44.4183 48 40C48 35.5817 44.4183 32 40 32C35.5817 32 32 35.5817 32 40C32 44.4183 35.5817 48 40 48Z" fill="#D73618" />
    </svg>
  );
};

export default Logo;
