
import React from 'react';
import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import TaskList from '@/components/TaskList';
import NewsSection from '@/components/NewsSection';
import EventsSection from '@/components/EventsSection';
import UpdatesSection from '@/components/UpdatesSection';
import BirthdaysSection from '@/components/BirthdaysSection';
import QuickLinksSection from '@/components/QuickLinksSection';
import BottomNavigation from '@/components/BottomNavigation';

const Index = () => {
  // Create a data URL for the logo
  const logoSrc = '/lovable-uploads/1cd5f25e-eb6a-4fce-bbd6-998f9116404e.png';
  
  // Mock profile data
  const profile = {
    name: 'विकी जैन',
    role: 'कार्यसमिति सदस्य',
    points: 4000,
    avatarSrc: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=150&h=150&q=80'
  };

  return (
    <div className="min-h-screen pb-24 lotus-background">
      <Header logoSrc={logoSrc} />
      <ProfileSection {...profile} />
      <TaskList />
      <NewsSection />
      <EventsSection />
      <UpdatesSection />
      <BirthdaysSection />
      <QuickLinksSection />
      <BottomNavigation />
    </div>
  );
};

export default Index;
