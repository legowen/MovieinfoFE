import React from 'react'
import { Badge } from 'react-bootstrap';

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
        <div className='overlay'>
          <h1>{item.title}</h1>
          <div>{item.genre_ids.map((id) => (
            <Badge bg="danger">id</Badge>
            ))}
          </div>
          <div>
            <span>{item.vote_average}</span>
            <span>{item.adult ? "R" : "G" }</span>
          </div>
        </div>
    </div>
  );
};

export default MovieCard