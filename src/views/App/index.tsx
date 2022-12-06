import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Intro}>
        <h1>StarWars films</h1>
        <p>A long time ago, in a galaxy far, far away...</p>
      </div>

      <div className={styles.List}>
        <h2>Movie List:</h2>
      </div>
    </div>
  );
}

export {
  App
};
