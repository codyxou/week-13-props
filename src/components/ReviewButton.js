import React, {useState} from 'react';
import ReviewForm from './ReviewForm';

function ReviewButton() {

    const [showForm, setShowForm] = useState(false);

    const handleClick = (e,movie) => {
        e.preventDefault();
        console.log('button was clicked');
        setShowForm(!showForm);
        console.log('review form opened');
    }


  return (
    <>
    <button className='btn btn-primary p-2 m-3' onClick={(e) => handleClick(e)}>Review Movie</button>
    {showForm && <ReviewForm />}
    </>
  )
    
}

export default ReviewButton