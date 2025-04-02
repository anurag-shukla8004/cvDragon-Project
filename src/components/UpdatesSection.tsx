
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

interface UpdateCardProps {
  title: string;
  description: string;
  color: 'dark' | 'light' | 'orange';
}

const UpdateCard: React.FC<UpdateCardProps> = ({ title, description, color }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'dark':
        return 'bg-gray-800 text-white';
      case 'light':
        return 'bg-sangathan-light text-sangathan-primary';
      case 'orange':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-white text-gray-900';
    }
  };

  return (
    <div className={`rounded-xl p-4 h-full ${getColorClasses()}`}>
      <h3 className="font-bold text-sm mb-2">{title}</h3>
      <p className="text-xs mb-4 line-clamp-3">{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <button className="text-xs font-medium">More info</button>
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6H11M6 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const UpdatesSection: React.FC = () => {
  const updates = [
    {
      title: 'कार्यसमिति बैठक',
      description: 'सभी सदस्यों को सूचित किया जाता है की कार्यसमिति की बैठक इस रविवार को है।',
      color: 'dark' as const
    },
    {
      title: 'कार्यसमिति बैठक',
      description: 'सभी सदस्यों को सूचित किया जाता है की कार्यसमिति की बैठक इस रविवार को है।',
      color: 'light' as const
    },
    {
      title: 'कार्यसमिति बैठक',
      description: 'सभी सदस्यों को सूचित किया जाता है की कार्यसमिति की बैठक इस रविवार को है।',
      color: 'orange' as const
    },
    {
      title: 'नए सदस्य',
      description: 'इस महीने हमारे संघटन में 5 नए सदस्य शामिल हुए हैं।',
      color: 'dark' as const
    }
  ];

  return (
    <div className="px-6 mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-sangathan-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V12" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16H12.01" stroke="#D73618" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-xl font-bold text-sangathan-primary">Updates</h2>
        </div>
        <button className="text-sangathan-primary font-medium text-sm">View All</button>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {updates.map((update, index) => (
            <CarouselItem key={index} className="md:basis-1/2" style={{ minHeight: '160px' }}>
              <UpdateCard 
                title={update.title} 
                description={update.description}
                color={update.color}
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

export default UpdatesSection;
