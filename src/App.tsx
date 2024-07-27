import React, { useState } from 'react';
import Recommendations from './components/Recommendation';
import Sidebar from './components/SideNavBar';
import Navbar from './components/Navbar';

interface UserProfile {
  id: number;
  name: string;
  gender: string;
  location: string;
  university: string;
  interests: string[];
}

  const mockUserProfile: UserProfile = {
    id: 1,
    name: 'John Doe',
    gender: 'Male',
    location: 'New York',
    university: 'NYU',
    interests: ['music', 'coding', 'gaming'],
  };


const mockAllProfiles: UserProfile[] = [
  {
    id: 2,
    name: 'Jane Smith',
    gender: 'Female',
    location: 'Boston',
    university: 'NYU',
    interests: ['reading', 'coding', 'movies'],
  },
  {
    id: 3,
    name: 'Alice Johnson',
    gender: 'Female',
    location: 'Los Angeles',
    university: 'UCLA',
    interests: ['music', 'gaming', 'sports'],
  },
  {
    id: 4,
    name: 'Robert Brown',
    gender: 'Male',
    location: 'Chicago',
    university: 'NYU',
    interests: ['music', 'traveling', 'coding'],
  },
  {
    id: 5,
    name: 'Emily Davis',
    gender: 'Female',
    location: 'San Francisco',
    university: 'Stanford',
    interests: ['hiking', 'reading', 'gaming'],
  },
  {
    id: 6,
    name: 'Michael Wilson',
    gender: 'Male',
    location: 'New York',
    university: 'NYU',
    interests: ['music', 'sports', 'coding'],
  },
  {
    id: 7,
    name: 'Laura Martinez',
    gender: 'Female',
    location: 'Miami',
    university: 'NYU',
    interests: ['coding', 'photography', 'traveling'],
  },
  {
    id: 8,
    name: 'David Anderson',
    gender: 'Male',
    location: 'Houston',
    university: 'Texas A&M',
    interests: ['movies', 'gaming', 'reading'],
  },
  {
    id: 9,
    name: 'Sophia Thomas',
    gender: 'Female',
    location: 'Seattle',
    university: 'UW',
    interests: ['music', 'hiking', 'coding'],
  },
  {
    id: 10,
    name: 'Daniel Jackson',
    gender: 'Male',
    location: 'Austin',
    university: 'UT Austin',
    interests: ['gaming', 'coding', 'sports'],
  },
  {
    id: 11,
    name: 'Olivia Lee',
    gender: 'Female',
    location: 'Denver',
    university: 'NYU',
    interests: ['photography', 'traveling', 'music'],
  },
  {
    id: 12,
    name: 'Ethan Harris',
    gender: 'Male',
    location: 'Boston',
    university: 'MIT',
    interests: ['music', 'reading', 'gaming'],
  },
  {
    id: 13,
    name: 'Mia Clark',
    gender: 'Female',
    location: 'San Diego',
    university: 'UCLA',
    interests: ['coding', 'hiking', 'music'],
  },
  {
    id: 14,
    name: 'William Rodriguez',
    gender: 'Male',
    location: 'New York',
    university: 'NYU',
    interests: ['traveling', 'sports', 'music'],
  },
  {
    id: 15,
    name: 'Samantha White',
    gender: 'Female',
    location: 'San Francisco',
    university: 'Stanford',
    interests: ['reading', 'photography', 'coding'],
  },
  {
    id: 16,
    name: 'Benjamin Lewis',
    gender: 'Male',
    location: 'Boston',
    university: 'Harvard',
    interests: ['music', 'sports', 'movies'],
  },
  {
    id: 17,
    name: 'Victoria King',
    gender: 'Female',
    location: 'Chicago',
    university: 'UChicago',
    interests: ['traveling', 'hiking', 'music'],
  },
  {
    id: 18,
    name: 'James Wright',
    gender: 'Male',
    location: 'Los Angeles',
    university: 'USC',
    interests: ['gaming', 'coding', 'reading'],
  },
  {
    id: 19,
    name: 'Grace Hall',
    gender: 'Female',
    location: 'New York',
    university: 'NYU',
    interests: ['music', 'photography', 'coding'],
  },
  {
    id: 20,
    name: 'Aiden Young',
    gender: 'Male',
    location: 'Miami',
    university: 'University of Miami',
    interests: ['sports', 'movies', 'reading'],
  },
  {
    id: 21,
    name: 'Isabella Scott',
    gender: 'Female',
    location: 'Houston',
    university: 'Rice University',
    interests: ['music', 'traveling', 'photography'],
  },
  {
    id: 22,
    name: 'Mason Green',
    gender: 'Male',
    location: 'Seattle',
    university: 'UW',
    interests: ['coding', 'hiking', 'movies'],
  },
  {
    id: 23,
    name: 'Ava Adams',
    gender: 'Female',
    location: 'Boston',
    university: 'MIT',
    interests: ['music', 'reading', 'gaming'],
  },
  {
    id: 24,
    name: 'Lucas Baker',
    gender: 'Male',
    location: 'Austin',
    university: 'UT Austin',
    interests: ['sports', 'coding', 'traveling'],
  },
  {
    id: 25,
    name: 'Charlotte Gonzalez',
    gender: 'Female',
    location: 'Denver',
    university: 'University of Denver',
    interests: ['hiking', 'photography', 'music'],
  },
  {
    id: 26,
    name: 'Henry Perez',
    gender: 'Male',
    location: 'Chicago',
    university: 'UChicago',
    interests: ['traveling', 'sports', 'coding'],
  },
  {
    id: 27,
    name: 'Amelia Turner',
    gender: 'Female',
    location: 'San Diego',
    university: 'UCSD',
    interests: ['reading', 'music', 'gaming'],
  },
  {
    id: 28,
    name: 'Jackson Hill',
    gender: 'Male',
    location: 'San Francisco',
    university: 'Stanford',
    interests: ['coding', 'movies', 'hiking'],
  },
  {
    id: 29,
    name: 'Sophia Mitchell',
    gender: 'Female',
    location: 'Los Angeles',
    university: 'UCLA',
    interests: ['music', 'gaming', 'photography'],
  },
  {
    id: 30,
    name: 'Daniel Walker',
    gender: 'Male',
    location: 'New York',
    university: 'NYU',
    interests: ['traveling', 'coding', 'music'],
  },
];

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleOpenSidebar = () => setIsSidebarOpen(true);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <Sidebar profile={mockUserProfile} isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar onOpenSidebar={handleOpenSidebar} />
        <div  className="flex-1 flex items-center justify-center p-4 lg:pl-72 z-0">
          <Recommendations userProfile={mockUserProfile} allProfiles={mockAllProfiles} />
        </div>
      </div>
    </div>
  );
};


export default App;
