import {React,useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
function MovieList (props){
    const FavouriteComponent = props.favouriteComponent;
    return(
        <>
        <div className="container-fluid movie-app">
        <div className='row'>
            {props.movies.map((movie,index)=>
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src= {movie.Poster} alt="movie"></img>
                    <div onClick={()=>props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify">
                        <FavouriteComponent/>
                    </div>
                </div>
            )}
        </div>
        </div>
        </>
    )
}
export default MovieList;