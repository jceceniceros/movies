export interface MovieModel {
  title: String,
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: [],
  planets: [],
  starships: [],
  vehicles: [],
  species: [],
  created: String,
  edited: String,
  url: String
}

interface MovieProps {
  title: String
}

const Movie: React.FC<MovieProps> = (props) => <li>{props.title}</li>;

export {
  Movie,
}
