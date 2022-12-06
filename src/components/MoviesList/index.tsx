import { useEffect, useState } from 'react';

import { Movie, MovieModel } from './Movie';

import styles from './styles.module.css';

const API_URL = 'https://swapi.dev/api/films';

const MoviesList: React.FC = (props) => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [episodeId, setEpisodeId] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((movies) => setMovies(movies))
      .catch((error) => console.error(error));
  }, []);

  const handleClickButton = (episodeId: number) => () => {
    setEpisodeId(episodeId);
  };

  const moviesList = movies.map((movie) => (
    <Movie
      key={`movie-${movie.episode_id}`}
      title={movie.title}
      episodeId={movie.episode_id}
      characters={movie.characters}
      showCharacters={movie.episode_id === episodeId}
      onClickButton={handleClickButton(movie.episode_id)}
    />
  ));

  return (
    <div className={styles.MoviesList}>
      <h2>Movie List:</h2>

      {movies.length > 0 && <ul>{moviesList}</ul>}
    </div>
  );
};

export { MoviesList };
