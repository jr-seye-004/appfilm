import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FilmDetail from './components/FilmDetail';
import './App.css';

const App = () => {
  const defaultFilms = [
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterUrl: 'Inception.jpeg',
      rating: 8.8,
      trailerUrl: 'https://youtu.be/HcoZbHBDHQA?si=_fv9Crki90aM542N'
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterUrl: 'Interstellar.jpeg',
      rating: 8.6,
      trailerUrl: 'https://youtu.be/HsPP6xSzQoE?si=PFT-oqfUnwNlaMfb'
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      posterUrl: 'The Dark Knight.jpeg',
      rating: 9.0,
      trailerUrl: 'https://youtu.be/UMgb3hQCb08?si=b1BGijlxEKYOw2d3'
    },
    {
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'The Matrix.jpeg',
      rating: 8.7,
      trailerUrl: 'https://youtu.be/8xx91zoASLY?si=8SXhfbl2exdf_Yro'
    },
    {
      title: 'Fight Club',
      description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      posterUrl: 'Fight Club.jpeg',
      rating: 8.8,
      trailerUrl: 'https://youtu.be/c_Sf-XY3t-I?si=LvWAB9hJag0BkuSU'
    },
    {
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterUrl: 'Pulp Fiction.jpeg',
      rating: 8.9,
      trailerUrl: 'https://youtu.be/6FlBKSku3Ik?si=czNo4_OzTyHqNeRF'
    }
  ];

  const [films, setFilms] = useState(defaultFilms);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home films={films} setFilms={setFilms} />} />
          <Route path="/film/:title" element={<FilmDetail films={films} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

