import React from 'react'
import '../CSS/Banner.css'
const Banner = ({movie}) => {
  console.log(movie,'movie')
  return (
    <div 
    className='Banner'
    style={{
      backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`+")",
      backgroundRepeat:"no-repeat",
      // backgroundSize:'cover',

    }}>
     <div className='Banner-info'>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      </div>
     
    </div>
  )
}

export default Banner