
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import PrayImg from '../../public/prayImg.png'

interface EventCardProps {
  title: string;
  location: string;
  date: string;
  month: string;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, location, date, month, imageUrl }) => {
  return (
    <div className="relative overflow-hidden rounded-xl h-full">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 right-2 bg-white rounded-md py-1 px-2 text-center">
        <div className="text-lg font-bold text-sangathan-primary">{date}</div>
        <div className="text-xs uppercase">{month}</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
        <h3 className="text-white font-medium text-sm">{title}</h3>
        <div className="flex items-center gap-1 text-white/80 text-xs mt-1">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

const EventsSection: React.FC = () => {
  const events = [
    {
      title: 'Terapanth Sthapna Divas',
      location: 'Ahmedabad',
      date: '17',
      month: 'June',
      imageUrl: PrayImg
    },
    {
      title: 'Terapanth Sthapna Divas',
      location: 'Ahmedabad',
      date: '17',
      month: 'June',
      imageUrl: PrayImg
    },
    {
      title: 'Yoga Day Celebration',
      location: 'Mumbai',
      date: '21',
      month: 'June',
      imageUrl: PrayImg
    }
  ];

  return (
    <div className="px-6 mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-sangathan-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V5" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 9H21" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H10V14H8V12Z" fill="#D73618"/>
            <path d="M14 12H16V14H14V12Z" fill="#D73618"/>
            <path d="M8 16H10V18H8V16Z" fill="#D73618"/>
            <path d="M14 16H16V18H14V16Z" fill="#D73618"/>
          </svg>
          <h2 className="text-xl font-bold text-sangathan-primary">Events</h2>
        </div>
        <button className="bg-white px-4 py-2 rounded-lg shadow-sm text-sangathan-primary font-medium text-sm">View All</button>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <EventCard 
                title={event.title} 
                location={event.location}
                date={event.date}
                month={event.month}
                imageUrl={event.imageUrl}
              />
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

export default EventsSection;
