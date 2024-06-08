import React from 'react';
import { useContext } from 'react'
import { Context } from '../../App'
import dogImage from '../../Assets/profil-top.jpg'; // Ensure this path is correct

const ProfileCard = () => {
    const {isAuthenticated, loading ,user}= useContext(Context)

  return (
    <div className="relative w-full h-96 flex items-center justify-between bg-gray-100">
      <div className="absolute inset-0 flex items-center justify-between p-10">
        <div className="flex items-center">
          <div className="relative">
            <div className="h-48 w-48 rounded-full overflow-hidden bg-yellow-400">
              <img src={user.profileImage} alt="User" className="h-full w-full object-cover" />
            </div>
            <div className="absolute bottom-2 right-2 bg-blue-200 h-6 w-6 rounded-full border-4 border-white"></div>
          </div>
          <div className="ml-6">
            <h1 className="text-xl font-bold text-blue-500">{user.full_name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
      <img src={dogImage} alt="Dog" className="w-full h-full object-cover" />
    </div>
  );
};

export default ProfileCard;
