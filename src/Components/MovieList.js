import Movie from "./Movie";
import "./MovieList.css";

const MovieList = (props) => {
  const movieList = props.movies.map((movie) => (
    <Movie key={movie.id} title={movie.title} description={movie.description} />
  ));
  return <ul className='movie_list'>{movieList}</ul>;
};

export default MovieList;
