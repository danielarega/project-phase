import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios'
import './row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`https://image.tmdb.org/t/p/w500${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;