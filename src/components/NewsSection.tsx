
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const NewsSection: React.FC = () => {
  const news = [
    {
      title: 'अंतराराष्ट्रीय योग दिवस में जक्कीवाड़ी संघठन द्वारा आयोजित कार्यक्रम',
      imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      time: '3 mins ago'
    },
    {
      title: 'अंतराराष्ट्रीय योग दिवस में जक्कीवाड़ी संघठन द्वारा आयोजित कार्यक्रम',
      imageUrl: 'https://images.unsplash.com/photo-1593526411462-6fdb01b0b55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      time: '10 mins ago'
    }
  ];

  return (
    <div className="px-6 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-sangathan-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6L12 18" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 12L18 12" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-xl font-bold text-sangathan-primary">News</h2>
        </div>
        <button className="text-sangathan-primary font-medium">View All</button>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {news.map((item, index) => (
            <CarouselItem key={index}>
              <div className="bg-gray-200 rounded-xl aspect-video relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-70 backdrop-blur-sm rounded-md px-2 py-1 text-xs">
                  {item.time}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <h3 className="text-white text-sm font-medium">{item.title}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center mt-3 space-x-1">
        {[0, 1, 2].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-sangathan-primary' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
