import React, { useState } from 'react';
import "../styles/global.css"


const HoverText = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleMouseEnter = () => {
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

    // 在这里输出ingredients内容
    // console.log("Ingredients:", item.ingredients);


  return (
    <div className='WrapperText'>
      <img
        src={item.image_url}
        alt={item.name}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showPopup && <div className="popup-style">
      Ingredients:  {item.ingredients.join(', ')}
        </div>}
      </div>
  );
};

export default HoverText;
