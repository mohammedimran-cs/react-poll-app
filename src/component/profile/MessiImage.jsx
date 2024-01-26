import React from 'react';
import MessiName from './MessiName';
import messi from './messi.jpg'; // Import the image

const MessiImage = () => {
  return (
    <div className="col">
      <img src={messi} alt="messi" />
      <MessiName />
    </div>
  );
};

export default MessiImage;
