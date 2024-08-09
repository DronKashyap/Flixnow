import Axios from "../Axios";
import React, { useState, useEffect } from 'react';
import "./rows.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Rows({ title, fetchurl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await Axios.get(fetchurl);
        //console.table(response.data.results);
        setMovies(response.data.results); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchdata();
  }, [fetchurl]);

  const openTrailer = async (movie) => {
    try {
      const url = await movieTrailer(movie?.name || '', { tmdbId: movie.id });
      if (url) {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      } else {
        console.log('No trailer found for the movie');
        // You can add a user-friendly message or alert here if needed
      }
    } catch (error) {
      console.error('Error fetching trailer data:', error);
      // You can add a user-friendly message or alert here if needed
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie) => (
          <img
            className='row-poster'
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            onClick={() => openTrailer(movie)} // Added onClick event to open trailer
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} {/* Added YouTube component for displaying trailer */}
    </div>
  );
}

export default Rows;

