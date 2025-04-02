import React from "react";
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import TaskList from "@/components/TaskList";
import NewsSection from "@/components/NewsSection";
import EventsSection from "@/components/EventsSection";
import UpdatesSection from "@/components/UpdatesSection";
import BirthdaysSection from "@/components/BirthdaysSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import BottomNavigation from "@/components/BottomNavigation";
import LogoSvg from "../../public/logo.svg";

const Index = () => {
  // Mock profile data
  const profile = {
    name: "विकी जैन",
    role: "कार्यसमिति सदस्य",
    points: 4000,
    avatarSrc:
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=150&h=150&q=80",
  };

  return (
    <div className="min-h-screen pb-24 bg-gray-100">
      <div className="bg-[url('/lotusBg.png')] bg-cover bg-center min-h-[300px]">
        <Header logoSrc={LogoSvg} />
        <ProfileSection {...profile} />
      </div>
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
