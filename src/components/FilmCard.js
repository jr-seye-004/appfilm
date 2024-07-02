import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <img src={film.posterUrl} alt={`${film.title} poster`} />
      <h3>{film.title}</h3>
      <p>{film.description}</p>
      <p>Note: {film.rating}</p>
      <Link to={{
        pathname: `/film/${film.title}`,
        state: { film }
      }}>
        View Details
      </Link>
    </div>
  );
};

export default FilmCard;

