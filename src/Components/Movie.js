import "./Movie.css";

const Movie = (props) => {
  return (
    <li className='movie'>
      <h2>{props.title}</h2>
      <span>{props.description}</span>
    </li>
  );
};

export default Movie;
