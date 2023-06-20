import React from 'react'

const MovieCard = ({ item }) => {

  return (

    <div
        className='card' 
        style = {{
            backgroundImage: 
                "url(" +
                    `https://www.themoviedb.org/t/p/w440_and_h660_face/${item.poster_path}` +
                ")",
            }}
    >
        MovieCard
    </div>
  );
};

export default MovieCard