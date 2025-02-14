// write the component code here

import React from 'react';

const Usercard = () => {
  const profilePhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsdrJhuv3FcZmEE9MHYjIaJ5DOxSIQ39BWg&s';
  const name = 'Zack';
  const email = 'Zack@example.com';
  const phone = '1234567890';
  const address = 'hills, Mumbai';

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-72 text-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-3"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-500 text-sm">{address}</p>
    </div>
  );
};

export default Usercard;