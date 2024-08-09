import React,{useState , useEffect} from 'react'
import Axios from "../Axios";
import requests from '../Requests';
import './banner.css'

function Banner() {

 const[movie,setMovie]=useState(null)
 useEffect(() => {
  const fetchPopularMovies = async () => {
    try {
      const response = await Axios.get(
        requests.fetchpopular
      );
      const randomIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      setMovie(response.data.results[randomIndex]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchPopularMovies();
}, []);

// Check if movie and backdrop_path are defined before rendering
if (!movie || !movie.backdrop_path) {
  return null; // or handle the case when movie data is not available
}

  return (
    <header
    className="banner"
    style={{
      
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      backgroundPosition: 'center center',
      backgroundSize: '100% 100%',
    }}
  >
    <div className="banner__contents">
      <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
      <div className="banner__buttons">
        <button className="banner_buttons">
          Play
          </button>
          <button className="banner_buttons">
          My List
          </button>
      </div>
      <h1 className="banner__description">{movie?.overview}</h1>
    </div>
    <div className="banner--fadeBottom" />
  </header>
);
}

export default Banner
