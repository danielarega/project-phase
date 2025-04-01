import React, { useState, useEffect } from 'react';
import axios from '../../../utils/axios';
import './row.css';
import YouTube from 'react-youtube';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0
    },
  };

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        const response = await axios.get(
          `/movie/${movie.id}/videos?api_key=d136a7724cb88e8c301ba4b3f3387f10`
        );
        const videos = response.data.results;
        const trailer = videos.find(vid => vid.type === "Trailer");
        setTrailerUrl(trailer?.key || "");
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    }
  };

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
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && (
        <div style={{ padding: "40px" }}>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Row;