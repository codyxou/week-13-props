import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReviewForm from './components/ReviewForm';
import MovieList from './components/MovieList';
import App from './App';
import StarRating from './components/StarRating';
import ReviewButton from './components/ReviewButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h2 className='text-center display-3'>Movie Review App</h2>
    <MovieList />
  </div>
  
);

