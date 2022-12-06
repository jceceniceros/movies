import { useState, useEffect } from 'react';

import { CharactersList } from 'src/components/CharactersList';

export interface MovieModel {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface MovieProps {
  title: string;
  episodeId: number;
  characters: string[];
  showCharacters: boolean;
  onClickButton: () => void;
}

const Movie: React.FC<MovieProps> = (props) => {
  const [characters, setCharacters] = useState<string[]>([]);

  useEffect(() => {
    if (props.showCharacters) {
      const charactersPromises = props.characters.map((characterUrl) =>
        fetch(characterUrl).then((response) => response.json())
      );

      Promise.all(charactersPromises)
        .then((data) => data.map((character) => character.name))
        .then((characters) => setCharacters(characters))
        .catch((error) => console.error(error));
    }
  }, [props.showCharacters]);

  return (
    <li>
      {props.title}
      <button onClick={props.onClickButton}>Show movie characters</button>

      {props.showCharacters && characters.length > 0 && (
        <CharactersList characters={characters} />
      )}
    </li>
  );
};

export { Movie };
