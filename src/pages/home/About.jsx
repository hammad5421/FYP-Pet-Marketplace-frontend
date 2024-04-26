import React from 'react';

const AboutComponent = () => {
  return (
    <div className="relative h-200 bg-cover bg-center" style={{backgroundImage: "url('path_to_your_image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">LikePets.co.uk makes it easy to find your next pet. We gather all pets for sale on the internet. Find your new family member among our many pet listings.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
