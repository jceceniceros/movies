import { useEffect, useState } from 'react';

import { Movie, MovieModel } from './Movie';

import styles from './styles.module.css';

const API_URL = 'https://swapi.dev/api/films';

const MoviesList: React.FC = (props) => {
  const [movies, setMovies] = useState<MovieModel[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error));
  }, [])

  const moviesList = movies.map((movie) => (
    <Movie title={movie.title} />
  ))

  return (
    <div className={styles.MoviesList}>
      <h2>Movie List:</h2>

      {movies.length > 0 && <ul>{moviesList}</ul>}
    </div>
  );
};

export {
  MoviesList
}
