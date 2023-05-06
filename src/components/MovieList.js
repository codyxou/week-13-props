import React from 'react';
import ReviewButton from './ReviewButton';

function MovieList() {
 
    let movieList = [ 
        
        {
            title: 'The Shawshank Redemption',
            year: '1994',
            sypnopsis: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
            Poster:"https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
            
            
        },
        {
            title: 'The Dark Knight',
            year: '2008',
            sypnopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            Poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            
            
        },
        {
            title: 'Interstellar',
            year: '2014',
            sypnopsis: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
            Poster:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            
            
        }
                    ]
 
    let showMovies = movieList.map((movie,i) => {
        return(
        <div key={i} className='container text-center pt-5'>
            <div className='row'>
            <div className='col-sm card p-2 m-1'>
                <img src={movie.Poster} alt='' className='img-thumbnail mx-auto my-auto' style={{maxWidth: '200px'}}></img>
                    <div className='card-body'>
                <h2 className='card-title'>{movie.title}</h2>
                <h3>{movie.year}</h3>
                    </div>
                <div className='card-text'>
                    <p>{movie.sypnopsis}</p>
                    {/* <p>{movie.reviews}</p> */}
                    <div>{movie.rating}</div>
                    <div><ReviewButton /></div>
                </div>
            </div>
            </div>
        </div>
                );
             });

             return (
                <div>{showMovies}</div>
             );
                    

                
}

export default MovieList