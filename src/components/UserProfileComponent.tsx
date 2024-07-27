import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

interface UserProfile {
  id: number;
  name: string;
  gender: string;
  location: string;
  university: string;
  interests: string[];
}

const UserProfileComponent: React.FC<{ profile: UserProfile; onSwipe: (direction: 'right' | 'left') => void }> = ({ profile, onSwipe }) => {
  return (
    <motion.div
      className="max-w-md w-full rounded-xl overflow-hidden shadow-lg m-4 bg-white"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileTap={{ cursor: "grabbing" }}
      dragElastic={0.7}
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) {
          onSwipe('right');
        } else if (info.offset.x < -100) {
          onSwipe('left');
        }
      }}
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <img
        className="w-full h-64 object-cover"
        src={`https://via.placeholder.com/400x300.png?text=${profile.name}`}
        alt={`${profile.name}`}
      />
      <div className="p-6">
        <div className="font-bold text-2xl mb-2">{profile.name}</div>
        <p className="text-gray-600 text-sm mb-1">{profile.gender} | {profile.location}</p>
        <p className="text-gray-600 text-sm mb-2">{profile.university}</p>
        <div className="flex flex-wrap mb-4">
          {profile.interests.map((interest, index) => (
            <span
              key={index}
              className="inline-block bg-indigo-200 rounded-full px-3 py-1 text-sm font-semibold text-indigo-800 mr-2 mb-2"
            >
              #{interest}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


export default UserProfileComponent