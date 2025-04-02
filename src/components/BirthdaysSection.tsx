
import React from 'react';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

interface BirthdayCardProps {
  name: string;
  role: string;
  imageUrl: string;
  isActive?: boolean;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ name, role, imageUrl, isActive = false }) => {
  return (
    <div className={`relative px-4 py-5 rounded-xl flex flex-col items-center h-full`}>
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-21 h-21 rounded-full object-cover mb-2"
      />
      <h3 className="font-bold text-sangathan-primary">{name}</h3>
      <p className="text-xs text-gray-600">{role}</p>
    </div>
  );
};

const BirthdaysSection: React.FC = () => {
  const birthdays = [
    {
      name: 'विकी जैन',
      role: 'कार्यसमिति सदस्य',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=150&h=150&q=80',
      isActive: true
    },
    {
      name: 'अमित शाह',
      role: 'कार्यसमिति सदस्य',
      imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=150&h=150&q=80'
    },
    {
      name: 'प्रिया पटेल',
      role: 'कार्यसमिति सदस्य',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'राजेश गुप्ता',
      role: 'कार्यसमिति सदस्य',
      imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  return (
    <div className="px-6 mt-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-sangathan-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10H21M7 3V5M17 3V5M6 19H10M14 19H18M12 15H16M8 15H8.01M8 11H8.01M12 11H12.01M16 11H16.01" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-xl font-bold text-sangathan-primary">Birthdays</h2>
        </div>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {birthdays.map((birthday, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <BirthdayCard 
                name={birthday.name} 
                role={birthday.role}
                imageUrl={birthday.imageUrl}
                isActive={birthday.isActive}
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
     <div className='w-full flex flex-row justify-center align-center'>
     <Button variant="outline" className="mt-5 rounded-md border border-red-600 text-red-600 bg-transparent hover:bg-red-600 hover:text-white">
        Upcoming Birthdays
      </Button>
     </div>
   
    </div>
  );
};

export default BirthdaysSection;
