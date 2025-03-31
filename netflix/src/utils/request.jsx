import React from 'react'

const API_KEY=process.env.REACT_APP_API_KEY;
const request={
fetchTrending:"/trending/movie/week?api_key=${API_KEY",
fetchNetflixOriginals:"/discover/tv?api_key=${API_KEY}&with_networks=213",
fetchTopRatesMovies:"/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=1000`",
fetchActionMovies:"/discover/movie?api_key=${API_KEY}&with_genres=28`",
fechComedyMovies:"/discover/movie?api_key=${API_KEY}&with_genres=35`",
fetchHorrorMovies:"/discover/movie?api_key=${API_KEY}&with_genres=27",
fetchRomanticMovies:"/discover/movie?api_key=${API_KEY}&with_genres=10749`",
fetchDocumentries:"/discover/movie?api_key=${API_KEY}&with_genres=99`",
fetchTvShow:'/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc'







}

function request() {
  return (
    <div>
       


         
    </div>
  )
}

export default request
