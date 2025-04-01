import React, { useState, useEffect } from 'react';
import request from "../../utils/request";
import axios from "../../utils/axios"
import"./banner.css"

function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Making API request to:", request.fetchNetflixOriginals);
                const response = await axios.get(request.fetchNetflixOriginals);
                
                if (response.data.results && response.data.results.length > 0) {
                    const randomMovie = response.data.results[
                        Math.floor(Math.random() * response.data.results.length)
                    ];
                    setMovie(randomMovie);
                } else {
                    console.warn("No results found in API response");
                }
            } catch (error) {
                console.error("API Error:", {
                    message: error.message,
                    url: error.config?.url,
                    status: error.response?.status
                });
            }
        };

        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    // Debug: Check if environment variables are loading
    // console.log("Environment Variables:", {
    //     VITE_API_KEY: import.meta.env.VITE_API_KEY,
    //     VITE_API_BASE: import.meta.env.VITE_API_BASE
    // });

    return (
        <div className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button play">play</button>
                    <button className="banner_button">my list</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className="banner_fadeBottom"></div>
        </div>
    );
}

export default Banner;