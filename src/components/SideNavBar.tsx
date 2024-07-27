import React from 'react';
import 'tailwindcss/tailwind.css';
import { XIcon } from '@heroicons/react/solid'; // Add Heroicons for a close button

interface UserProfile {
  name: string;
  gender: string;
  location: string;
  university: string;
  interests: string[];
}

const Sidebar: React.FC<{ profile: UserProfile; isOpen: boolean; onClose: () => void }> = ({ profile, isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-6 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:block lg:w-64`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center text-2xl font-bold">
            {profile.name[0]}
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-gray-400">{profile.gender} | {profile.location}</p>
            <p className="text-gray-400">{profile.university}</p>
          </div>
        </div>
        <button className="lg:hidden p-2 ml-auto" onClick={onClose}>
          <XIcon className="w-6 h-6 text-gray-300" />
        </button>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Interests</h3>
        <div className="flex flex-wrap">
          {profile.interests.map((interest, index) => (
            <span
              key={index}
              className="inline-block bg-indigo-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
            >
              #{interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
