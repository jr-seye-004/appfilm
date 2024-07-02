import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmDetail = ({ films }) => {
  const { title } = useParams();
  const film = films.find(film => film.title === title);

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <iframe
        width="560"
        height="315"
        src={film.trailerUrl}
        title={film.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default FilmDetail;

