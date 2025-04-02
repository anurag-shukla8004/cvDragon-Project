
import React from 'react';
import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import TaskList from '@/components/TaskList';
import NewsSection from '@/components/NewsSection';
import BottomNavigation from '@/components/BottomNavigation';
import Logo from '@/components/Logo';

const Index = () => {
  // Create a data URL for the logo
  const logoSrc = '/lovable-uploads/a6e5c147-71e6-48cc-a886-0ea7204ee0aa.png';
  
  // Mock profile data
  const profile = {
    name: 'विकी जैन',
    role: 'कार्यसमिति सदस्य',
    points: 4000,
    avatarSrc: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=150&h=150&q=80'
  };

  return (
    <div className="min-h-screen pb-20 lotus-background">
      <Header logoSrc={logoSrc} />
      <ProfileSection {...profile} />
      <TaskList />
      <NewsSection />
      <BottomNavigation />
    </div>
  );
};

export default Index;
