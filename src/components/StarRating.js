import React, {useState} from 'react';



const StarRating = () => {
  const [starRate, setStarRate] = useState(0);
  const [inputStar, setInputStar] = useState(0);

  const handleStarClick = (e, index) => {
    e.preventDefault();
    setStarRate(index); 

  };
 

  const handleStarChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputStar (newStar => ({...newStar, [name]: value}))
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index +=1;
        return (
        <button
          key={index}
          className={index <= starRate ? "on" : "off"}
          name='stars'
          value={inputStar.stars}
          onChange={handleStarChange}
          onClick={(e) => handleStarClick(e,index)}>
          <span className='display-5'>&#9733;</span>
        </button>
        
        );

      })}
    </div>
  );
};

export default StarRating