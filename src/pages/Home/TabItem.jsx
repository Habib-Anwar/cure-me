// TabItem.js

import React, { useState } from 'react';

const TabItem = ({ image, title, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="tab-item">
      <img src={image} alt={title} className='w-[550px
        ] h-[350px] rounded-md' />
      <h2 className='text-3xl font-bold'>{title}</h2>
      {showFullDescription ? (
        <p>{description}</p>
      ) : (
        <p>{description.slice(0, 100)}...</p>
      )}
      <button onClick={() => setShowFullDescription(!showFullDescription)} className='btn btn-outline btn-error'>
        {showFullDescription ? 'Hide Description' : 'More Details'}
      </button>
    </div>
  );
};

export default TabItem;
