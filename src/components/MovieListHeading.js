import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
function MovieListHeading(props){
    return(
        
        
        <div className='col'>
            <h1>{props.heading}</h1>
        </div>
        
        
    )
}

export default MovieListHeading;