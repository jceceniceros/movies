import { Character } from './Character';

interface CharactersListProps {
  characters: string[];
}

const CharactersList: React.FC<CharactersListProps> = (props) => {
  const charactersList = props.characters.map((character) => (
    <Character key={`character-${character}`} name={character} />
  ));

  return <ul>{charactersList}</ul>;
};

export { CharactersList };
