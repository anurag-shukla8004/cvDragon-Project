
import React from 'react';

const NewsSection: React.FC = () => {
  return (
    <div className="px-6 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-6 h-6 text-sangathan-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6L12 18" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 12L18 12" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h2 className="text-xl font-bold text-sangathan-primary">News</h2>
      </div>
      
      <div className="relative">
        <div className="bg-gray-200 rounded-xl aspect-video relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="News" className="object-cover w-full h-full" />
          <div className="absolute top-2 right-2 bg-white bg-opacity-70 backdrop-blur-sm rounded-md px-2 py-1 text-xs">
            3 mins ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
