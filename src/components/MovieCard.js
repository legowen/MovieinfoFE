import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MovieCard = ({ item }) => {

    const { genreList } = useSelector(state => state.movie);

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
              <Badge bg="danger">
                {genreList.find((item) => item.id == id).name}
              </Badge>
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