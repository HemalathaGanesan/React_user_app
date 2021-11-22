import "./Button.css";
const Button = (props) => {
  return (
    <div className='button_div'>
      <button onClick={props.onFetchMovie} className='fetch'>
        Fetch Movies
      </button>
    </div>
  );
};

export default Button;
