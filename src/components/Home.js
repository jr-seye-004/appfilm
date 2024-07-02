import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilmList from './FilmList';
import Filter from './Filter';
import AddFilmForm from './AddFilmForm';

const Home = ({ films, setFilms }) => {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  };

  const filteredFilms = films.filter(film => 
    film.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRating === '' || film.rating >= filterRating)
  );

  return (
    <div>
      <h1>Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <AddFilmForm addFilm={addFilm} />
      <FilmList films={filteredFilms} />
    </div>
  );
};

export default Home;
