import React, { useState, useEffect } from 'react';
import UserProfileComponent from './UserProfileComponent';
import Loader from './Loader';

interface UserProfile {
  id: number;
  name: string;
  gender: string;
  location: string;
  university: string;
  interests: string[];
}

const Recommendations: React.FC<{ userProfile: UserProfile; allProfiles: UserProfile[] }> = ({ userProfile, allProfiles }) => {
  const [recommendations, setRecommendations] = useState<UserProfile[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [totalProfiles, setTotalProfiles] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const generateRecommendations = () => {
      let scores = allProfiles
        .filter(profile => profile.id !== userProfile.id)
        .map(profile => {
          let score = 0;
          if (profile.university === userProfile.university) score += 3;
          score += profile.interests.filter(interest => userProfile.interests.includes(interest)).length;
          return { user: profile, score };
        });

      scores = scores.map(score => ({ ...score, score: score.score + Math.random() }));

      scores.sort((a, b) => b.score - a.score);
      return scores.slice(0, 10).map(score => score.user);
    };

    setRecommendations(generateRecommendations());
  }, [userProfile, allProfiles]);

  const handleSwipe = (direction: 'right' | 'left') => {
    if (currentIndex < recommendations.length-1) {
      if (direction === 'right') {
        setLikes(likes + 1);
      } else if (direction === 'left') {
        setDislikes(dislikes + 1);
      }
      setLoading(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setTotalProfiles(currentIndex+1);
        setLoading(false);
      }, 400); 
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {loading ? (
        <Loader />
      ) : hasMore ? (
        recommendations.length > 0 ? (
          <UserProfileComponent profile={recommendations[currentIndex]} onSwipe={handleSwipe} />
        ) : (
          <p>Loading recommendations...</p>
        )
      ) : (
        <p className='text-2xl'>We will recommend you more tomorrow!</p>
      )}
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">Likes: {likes}</p>
        <p className="text-lg font-semibold">Dislikes: {dislikes}</p>
        <p className="text-lg font-semibold">Total Viewed Profiles : {totalProfiles}</p>
      </div>
      {hasMore?<div className="absolute bottom-0 flex justify-between w-full mb-8">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
          onClick={() => handleSwipe('left')}
        >
          Dislike
        </button>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          onClick={() => handleSwipe('right')}
        >
          Like
        </button>
      </div>:""}
    </div>
  );
};


 export default Recommendations;