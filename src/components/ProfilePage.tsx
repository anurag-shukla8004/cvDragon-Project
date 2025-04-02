
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Power, Edit, User, MapPin, Bell, Heart, FileText, BarChart2, Phone, MessageSquare, LifeBuoy, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import ProfileMenuItem from "@/components/ProfileMenuItem";
import { motion } from "framer-motion";
import LogoSvg from "../../public/logo.svg";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const menuItems = [
    { id: 1, title: "Profile", description: "Update and modify your profile", icon: <User className="h-5 w-5" /> },
    { id: 2, title: "My Area", description: "Update and modify your profile", icon: <MapPin className="h-5 w-5" /> },
    { id: 3, title: "Notification", description: "Turn on or off notification", icon: <Bell className="h-5 w-5" /> },
    { id: 4, title: "My Contribution", description: "Update and modify your profile", icon: <Heart className="h-5 w-5" /> },
    { id: 5, title: "My Notes", description: "Update and modify your profile", icon: <FileText className="h-5 w-5" /> },
    { id: 6, title: "My Scores", description: "Update and modify your profile", icon: <BarChart2 className="h-5 w-5" /> },
    { id: 7, title: "Contact", description: "Update and modify your profile", icon: <Phone className="h-5 w-5" /> },
    { id: 8, title: "Feedback", description: "Update and modify your profile", icon: <MessageSquare className="h-5 w-5" /> },
    { id: 9, title: "Support", description: "Update and modify your profile", icon: <LifeBuoy className="h-5 w-5" /> },
    { id: 10, title: "Settings", description: "Update and modify your profile", icon: <Settings className="h-5 w-5" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full relative bg-white shadow-sm min-h-screen">
        {/* Header section */}
        <div className="bg-amber-100 p-6 pb-8 relative">
          <div className="flex justify-between mb-4">
            <Button variant="outline" size="icon" className="rounded-full bg-white h-10 w-10">
             <Link to={'/'}>
              <ArrowLeft className="h-5 w-5" />
             </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white h-10 w-10">
              <Power className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative mb-3">
              <Avatar className="w-24 h-24 border-2 border-white">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" />
                ) : (
                  <img src={LogoSvg} alt="Default profile" className="object-cover" />
                )}
              </Avatar>
              <label htmlFor="profile-upload" className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 cursor-pointer border border-gray-200 shadow-sm">
                <Edit className="h-4 w-4" />
                <input 
                  id="profile-upload" 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Vikki Jain</h1>
            <div className="flex items-center text-gray-600 text-sm gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>Karyasamiti Sadasya</span>
            </div>
          </div>

          {/* Lotus flower background */}
          <div className="absolute bottom-0 right-0 opacity-10">
            <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor" className="text-amber-500">
              <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" opacity="0.25"></path>
              <path d="M10.87,18.23a19.55,19.55,0,0,0,2.26,0,12.17,12.17,0,0,0-.43-2.88,28.8,28.8,0,0,0-1.4,2.84ZM9.72,15a23.6,23.6,0,0,1-2.17-3.13,21.17,21.17,0,0,0-3.14,1.9A9,9,0,0,0,6.88,17,26,26,0,0,1,9.72,15Zm4.5-9.79A9.62,9.62,0,0,0,12,4.65a9.62,9.62,0,0,0-2.22.56A31.86,31.86,0,0,1,14.22,5.21ZM6.12,7A28.81,28.81,0,0,0,3,8.89,9,9,0,0,0,5.3,13c.7-.85,1.46-1.67,2.26-2.49A38.7,38.7,0,0,1,6.12,7ZM6.46,6.23C7.68,5,9,3.94,10.56,3a9,9,0,0,0-5.57,3c-.41.42-.8.83-1.17,1.26A18.84,18.84,0,0,1,6.46,6.23Zm5.51,6.33a11.92,11.92,0,0,1-1.56-2.57A22,22,0,0,0,7.73,12a14.9,14.9,0,0,1-1.2,2.25A8.73,8.73,0,0,0,12,18.47a8.73,8.73,0,0,0,5.47-4.23A14.9,14.9,0,0,1,16.27,12a22,22,0,0,0-2.74-2A11.92,11.92,0,0,1,12,12.56Z"></path>
            </svg>
          </div>
        </div>

        {/* Menu section */}
        <motion.div 
          className="p-4 space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {menuItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <ProfileMenuItem
                icon={item.icon}
                title={item.title}
                description={item.description}
                onClick={() => console.log(`Clicked on ${item.title}`)}
              />
            </motion.div>
          ))}

          <motion.div 
            variants={itemVariants}
            className="mt-6"
          >
            <Button 
              className="w-full bg-red-700 hover:bg-red-800 text-white py-6 rounded" 
              onClick={() => console.log("Logged out")}
            >
              Log Out
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;