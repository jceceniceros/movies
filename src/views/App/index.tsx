import { MoviesList } from 'src/components/MoviesList';

import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Intro}>
        <h1>StarWars films</h1>
        <p>A long time ago, in a galaxy far, far away...</p>
      </div>

      <MoviesList />
    </div>
  );
}

export {
  App
};
