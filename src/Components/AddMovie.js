import { useRef } from "react";
import "./AddMovie.css";

const AddMovie = (props) => {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const releaseRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const movie = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      releaseDate: releaseRef.current.value,
    };
    props.onAddMovie(movie);
  };

  return (
    <form className='Movie_form' onSubmit={submitHandler}>
      <div className='Movie_fields'>
        <label>Movie Title</label>
        <input type='text' ref={titleRef}></input>
      </div>
      <div className='Movie_fields'>
        <label>Opening Text</label>
        <textarea rows='5' ref={descriptionRef}></textarea>
      </div>
      <div className='Movie_fields'>
        <label>Release Date</label>
        <input type='text' ref={releaseRef}></input>
      </div>
      <button className='Add_movie'> Add Movie</button>
    </form>
  );
};

export default AddMovie;
