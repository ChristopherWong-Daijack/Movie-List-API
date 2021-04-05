import {React,useState,useEffect} from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites'
import RemoveFavourites from './components/RemoveFavourites'


//import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {

  //States
  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  //UseEffect
  useEffect(()=>{
    getMovieRequest(searchValue);
  },[searchValue])

  useEffect(()=>{
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'))

    setFavourites(movieFavourites);
  },[])

  function saveToLocalStorage (items){
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(items))
  }

   async function getMovieRequest (searchValue){
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=22f1b9f4`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
    
    console.log(responseJson);
    
  }

 function addFavouriteMovie(movie){
  const newFavouriteList = [...favourites,movie];
  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
  console.log(favourites)
 }


 function RemoveFavouriteMovie(movie){
  const newFavouriteList = favourites.filter((favourite)=>
    favourite.imdbID !==movie.imdbID
  )

  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);

 }

  return (
  
    <div >
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading="Movies"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList 
        movies={movies} 
        handleFavouritesClick={addFavouriteMovie} 
        favouriteComponent={AddFavourites}
        />
      </div>
    </div>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieListHeading heading="Favourites"/>
      </div>
      <div className='row'>
      <MovieList 
        movies={favourites} 
        handleFavouritesClick={RemoveFavouriteMovie} 
        favouriteComponent={RemoveFavourites}
        />
      </div>
  </div>
  );
}

export default App;
