import {useState} from 'react';
import ReviewButton from './ReviewButton';
import MovieList from './MovieList';
import StarRating from './StarRating';



function ReviewForm () {

   const [review, setReview] = useState([]);
   const [inputReview, setInputReview] = useState('');


   //function that will change the usestate of each const declared and add to the array. the last part clears the field for the next submission. 
   const handlesubmit = (e) => {
        e.preventDefault();
        setReview([...review, inputReview]);
        setInputReview('');
    };
//function that changes the usestate into whatever string was put into the field
    const handleChange = (e) => {
    
        const name = e.target.name;
        const value = e.target.value;
        setInputReview(values => ({...values, [name]: value}))
    };
    

return (
    
    <div className='card'>

        <form onSubmit={handlesubmit}>
        <input 
                type='text'
                name='userName'
                className='form-control'
                value={inputReview.userName || ""}
                placeholder='Username'
                onChange={handleChange}/>
        <input 
                type='text'
                name='reviewTitle'
                className='form-control'
                value={inputReview.reviewTitle || ""}
                placeholder='Title of Review'
                onChange={handleChange}/>
        <textarea
                name = 'textReview'
                className='form-control'
                value={inputReview.textReview || ""}
                placeholder={'Leave your review of the movie'}
                onChange={handleChange}></textarea>
        <StarRating/>
        <button 
                className='btn btn-warning m-2' 
                type='submit'>Submit</button>
        </form>
        <div className='row'>
        <h2>User Reviews</h2>
            {review.map((reviews,i) =>(
                <div key={i}>
                    <p className='lead'>{reviews.reviewTitle}</p>
                    <p>{reviews.textReview}</p>
                    <footer className='blockquote-footer'>{reviews.userName}</footer>
                    </div>
            ))}
        </div>

    </div>
    
);


}

export default ReviewForm