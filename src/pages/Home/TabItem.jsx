// TabItem.js

import React, { useState } from 'react';

const TabItem = ({ image, title, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="tab-item">
      <img src={image} alt={title} className='w-[550px
        ] h-[350px] rounded-md' />
      <h2 className='text-xl font-bold mt-4 mb-2'>{title}</h2>
      {showFullDescription ? (
        <p>{description}</p>
      ) : (
        <p>{description.slice(0, 100)}...</p>
      )}
      <button onClick={() => setShowFullDescription(!showFullDescription)} className='btn btn-outline btn-error mt-2'>
        {showFullDescription ? 'Hide Details' : 'More Details'}
      </button>
    </div>
  );
};

export default TabItem;
