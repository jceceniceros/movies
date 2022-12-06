interface CharacterProps {
  name: string;
}

const Character: React.FC<CharacterProps> = (props) => <li>{props.name}</li>;

export {
  Character
}
